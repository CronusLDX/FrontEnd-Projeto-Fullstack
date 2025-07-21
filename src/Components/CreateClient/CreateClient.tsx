import React from 'react';
import { Main } from './styled';
import type { ClientProps } from '../../interfaces/Interface';
import { formattedCurrency } from '../../utility/FormatCurrency';

const CreateClients: React.FC = () => {
  const [clients, setClients] = React.useState<ClientProps[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newClient = {
      name: formData.get('name') as string,
      cpf: formData.get('cpf') as string,
      dateOfBirth: formData.get('dateOfBirth') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      status: formData.get('status') as string,
      fgtsBalance: formattedCurrency(
        parseFloat(formData.get('fgtsBalance') as string)
      ),
      balanceWithdraw: formattedCurrency(
        parseFloat(formData.get('balanceWithdraw') as string)
      ),
      dateOfRegistration: formData.get('dateOfRegistration') as string,
      modality: formData.get('modality') as string,
      observation: formData.get('observation') as string,
      autorization: formData.get('autorization') as string,
      withdrawAtendant: formData.get('withdrawAtendant') as string,
      withdrawDate: formData.get('withdrawDate') as string,
      createdAt: Date.now().toLocaleString(),
      updatedAt: Date.now().toLocaleString(),
    };
    setClients((clients: ClientProps[]) => [...clients, newClient]);
    console.log(newClient);
    event.currentTarget.reset();
  };
  return (
    <Main>
      <form onSubmit={handleSubmit}>
        <section>
          <div>
            <label htmlFor="name">&nbsp;Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ex: João Pedro"
            />
          </div>
          <div>
            <label htmlFor="cpf">&nbsp;CPF:</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="Ex: 123.456.789-00"
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="dateOfBirth">&nbsp;Data de Nascimento:</label>
            <input
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder="Ex: 01/01/2000"
            />
          </div>
          <div>
            <label htmlFor="email">&nbsp;Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Ex: 2lG7I@example.com"
              name="email"
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="phone">&nbsp;Telefone:</label>
            <input
              type="text"
              id="phone"
              placeholder="Ex: (11) 99999-9999"
              name="phone"
            />
          </div>
          <div>
            <label htmlFor="status">&nbsp;Status:</label>
            <input
              type="text"
              id="status"
              placeholder="Ex: ativo"
              name="status"
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="fgtsBalance">&nbsp;Saldo do FGTS (R$):</label>
            <input
              type="text"
              id="fgtsBalance"
              placeholder="Ex: 1000.0"
              name="fgtsBalance"
            />
          </div>
          <div>
            <label htmlFor="balanceWithdraw">&nbsp;Saldo Sacado (R$):</label>
            <input
              type="text"
              id="balanceWithdraw"
              placeholder="Ex: 0.0"
              name="balanceWithdraw"
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="dateOfRegistration">&nbsp;Data de Registro:</label>
            <input
              type="text"
              id="dateOfRegistration"
              placeholder="Ex: 01/01/2023"
              name="dateOfRegistration"
            />
          </div>
          <div>
            <label htmlFor="modality">&nbsp;Modalidade:</label>
            <input
              type="text"
              id="modalidade"
              placeholder="Ex: Saque Aniversário"
              name="modality"
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="autorization">&nbsp;Autorização:</label>
            <input
              type="text"
              id="autorization"
              placeholder="Ex: Sim"
              name="autorization"
            />
          </div>
          <div>
            <label htmlFor="withdrawAtendant">&nbsp;Atendente do Saque:</label>
            <input
              type="text"
              id="withdrawAtendant"
              placeholder="Ex: Maria Joaquina"
              name="withdrawAtendant"
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="withdrawDate">&nbsp;Data do Saque:</label>
            <input
              type="text"
              id="withdrawDate"
              placeholder="Ex: 01/01/2023"
              name="withdrawDate"
            />
          </div>
          <div>
            <label htmlFor="observation">&nbsp;Observação:</label>
            <input
              type="text"
              name="observation"
              id="observation"
              placeholder="Ex: Observação"
            />
          </div>
        </section>
        <div>
          <label htmlFor="description">&nbsp;Descrição:</label>
          <textarea
            placeholder="Ex: Descrição"
            name="description"
            id="description"
          ></textarea>
        </div>
        <button id="save" type="submit">
          Salvar
        </button>
      </form>
    </Main>
  );
};

export default CreateClients;
