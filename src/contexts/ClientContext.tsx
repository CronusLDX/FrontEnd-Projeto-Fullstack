import { createContext, useContext } from 'react';
import type { ClientContextProps, ClientProps } from '../interfaces/Interface';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ClientContext = createContext<ClientContextProps | null>(null);

export const ClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // State de Clientes
  const [clients, setClients] = React.useState<ClientProps[]>([]);

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

  // Função de envio do formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

    // objeto de envio baseado em ClientProps
    const newClient: ClientProps = {
      seqId: uuidv4(),
      name: formData.get('name') as string,
      cpf: formData.get('cpf') as string,
      dateOfBirth: formData.get('dateOfBirth') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      status: formData.get('status') as string,
      fgtsBalance: rawFgtsBalance,
      balanceWithdraw: rawBalanceWithdraw,
      dateOfRegistration: formData.get('dateOfRegistration') as string,
      modality: formData.get('modality') as string,
      observation: formData.get('observation') as string,
      autorization: formData.get('autorization') as string,
      withdrawAtendant: formData.get('withdrawAtendant') as string,
      withdrawDate: formData.get('withdrawDate') as string,
      description: formData.get('description') as string,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };

    // atualiza o estado de Clientes
    setClients((prevClients: ClientProps[]) => [...prevClients, newClient]);

    // exibe o conteúdo do State clients
    setTimeout(() => console.log(clients), 1500);
    // exibe mensagem de sucesso
    showAlert('Cliente cadastrado com sucesso!');

    // limpa o formulário
    event.currentTarget.reset();
  };

  // Função de atualização do formulário
  const handleChange = (
    seqId: string | undefined,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    if (!seqId) return console.error('seqId is undefined');
    const { name, value } = e.target;

    setClients(prevClients =>
      prevClients.map(client =>
        client.seqId === seqId ? { ...client, [name]: value } : client
      )
    );
  };

  //função de atualizar cliente
  const updateClient = (item: ClientProps) => {
    if (!item.seqId) return console.error('seqId is undefined');
    setClients((prevClients: ClientProps[]) =>
      prevClients.map((client: ClientProps) =>
        client.seqId === item.seqId
          ? {
              ...client,
              ...item,
              updatedAt: new Date().toLocaleString(),
            }
          : client
      )
    );
    showAlert('Cliente atualizado com sucesso!');
    console.log(clients);
  };
  // função de deletar cliente
  const deleteClient = (seqId: string): void => {
    setClients(clients.filter(client => client.seqId !== seqId));
  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        handleSubmit,
        deleteClient,
        handleChange,
        updateClient,
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
