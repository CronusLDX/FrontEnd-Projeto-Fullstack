import { createContext, useContext } from 'react';
import type { ClientContextProps, ClientProps } from '../interfaces/Interface';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import api from '../api/api';

export const ClientContext = createContext<ClientContextProps | null>(null);

export const ClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // State de Clientes
  const [clients, setClients] = React.useState<ClientProps[]>([]);

  // ref de atualizaçõa do form
  const formRef = React.useRef<HTMLFormElement>(null);
  // Função de Pop-Up de alerta
  const showAlert = (message: string) => alert(message);

  // Função de validação de saldo
  const validateBalances = (fgts: number, withdraw: number): boolean => {
    if (isNaN(fgts) || isNaN(withdraw)) {
      showAlert('Valores inválidos nos campos de saldo.');
      return false;
    }
    if (withdraw > fgts) {
      showAlert('Saldo insuficiente para saque.');
      return false;
    }
    return true;
  };

  // função de requisição tipo GET para pegar todos os usuarios
  const fetchAllClients = async () => {
    try {
      const response = await api.get('/clients');
      setClients(response.data);
    } catch (error) {
      showAlert('Erro ao buscar clientes.');
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchAllClients();
  }, []);

  // Função de envio do formulário
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault(); // previnir o comportamento padrão do formulário
    const formData = new FormData(event.currentTarget); // obter os dados do formulário

    // converter dados para float
    const rawFgtsBalance = parseFloat(
      (formData.get('fgtsBalance') as string)?.replace(',', '.') || '0'
    );
    const rawBalanceWithdraw = parseFloat(
      (formData.get('balanceWithdraw') as string)?.replace(',', '.') || '0'
    );

    // verificação de saldos
    if (!validateBalances(rawFgtsBalance, rawBalanceWithdraw)) return;

    const status = formData.get('status') as string;
    const autorization = formData.get('autorization') as string;

    // objeto de envio baseado em ClientProps
    const newClient: ClientProps = {
      id: uuidv4(),
      name: formData.get('name') as string,
      cpf: formData.get('cpf') as string,
      dateOfBirth: formData.get('dateOfBirth') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      status: status.toLowerCase() || '',
      fgtsBalance: rawFgtsBalance,
      balanceWithdraw: rawBalanceWithdraw,
      dateOfRegistration: formData.get('dateOfRegistration') as string,
      modality: formData.get('modality') as string,
      observation: formData.get('observation') as string,
      autorization: autorization.toLowerCase() || '',
      withdrawAtendant: formData.get('withdrawAtendant') as string,
      withdrawDate: formData.get('withdrawDate') as string,
      description: formData.get('description') as string,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      // envio da requisição TIPO POST
      const response = await api.post('/clients', newClient);
      // atualiza o estado de Clientes
      setClients((prevClients: ClientProps[]) => [
        ...prevClients,
        response.data,
      ]);
      // exibe mensagem de sucesso
      showAlert('Cliente cadastrado com sucesso!');
    } catch (error) {
      console.error(error);
      showAlert('Erro ao cadastrar cliente.');
    } finally {
      formRef.current?.reset();
    }
  };

  // Função de atualização do formulário
  const handleChange = (
    id: string | undefined,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    if (!id) return console.error('id is undefined');
    const { name, value } = e.target;

    setClients(prevClients =>
      prevClients.map(client =>
        client.id === id ? { ...client, [name]: value } : client
      )
    );
  };

  //função de atualizar cliente
  const updateClient = async (item: ClientProps): Promise<void> => {
    if (!item.id) return console.error('id is undefined');

    try {
      const response = await api.put(`/clients/${item.id}`, item);
      setClients((prevClients: ClientProps[]) =>
        prevClients.map((client: ClientProps) =>
          client.id === item.id
            ? {
                ...client,
                ...response.data,
                updatedAt: new Date().toLocaleString(),
              }
            : client
        )
      );
      showAlert('Cliente atualizado com sucesso!');
    } catch (error: any) {
      if (error.response) {
        console.error('Response error:', error.response.data);
      } else if (error.request) {
        console.error('Request error:', error.request);
      } else {
        console.error('Error', error.message);
      }
      showAlert('Erro ao atualizar cliente.');
    }
  };
  // função de deletar cliente
  const deleteClient = async (id: string): Promise<void> => {
    try {
      await api.delete(`/clients/${id}`);
      setClients((prevClients: ClientProps[]) =>
        prevClients.filter((client: ClientProps) => client.id !== id)
      );
      showAlert('Cliente deletado com sucesso!');
    } catch (error) {
      console.error(error);
      showAlert('Erro ao deletar cliente.');
    }
  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        handleSubmit,
        deleteClient,
        handleChange,
        updateClient,
        formRef,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

// Hook personalizado useClient
export const useClient = () => {
  const context: ClientContextProps | null = useContext(ClientContext);

  if (!context) {
    throw new Error('useClient must be used within a ClientProvider');
  }

  return context;
};
