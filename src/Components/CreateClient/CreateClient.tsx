import React from 'react';
import { Main } from './styled';
import { useClient } from '../../contexts/ClientContext';

const CreateClients: React.FC = () => {
  const { handleSubmit, formRef } = useClient();
  return (
    <Main>
      <form ref={formRef} onSubmit={handleSubmit}>
        <section>
          <div>
            <label htmlFor="name">&nbsp;Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ex: João Pedro"
              required
            />
          </div>
          <div>
            <label htmlFor="cpf">&nbsp;CPF:</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="Ex: 123.456.789-00"
              required
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="dateOfBirth">&nbsp;Data de Nascimento:</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" required />
          </div>
          <div>
            <label htmlFor="email">&nbsp;Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ex: exemplo@email.com"
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="phone">&nbsp;Telefone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Ex: (11) 99999-9999"
              required
            />
          </div>
          <div>
            <label htmlFor="status">&nbsp;Status:</label>
            <input
              type="text"
              id="status"
              name="status"
              placeholder="Ex: ativo"
              required
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="fgtsBalance">&nbsp;Saldo do FGTS (R$):</label>
            <input
              type="text"
              id="fgtsBalance"
              name="fgtsBalance"
              placeholder="Ex: 1000.00"
              required
            />
          </div>
          <div>
            <label htmlFor="balanceWithdraw">&nbsp;Saldo Sacado (R$):</label>
            <input
              type="text"
              id="balanceWithdraw"
              name="balanceWithdraw"
              placeholder="Ex: 500.00"
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="dateOfRegistration">&nbsp;Data de Registro:</label>
            <input
              type="date"
              id="dateOfRegistration"
              name="dateOfRegistration"
              required
            />
          </div>
          <div>
            <label htmlFor="modality">&nbsp;Modalidade:</label>
            <input
              type="text"
              id="modality"
              name="modality"
              placeholder="Ex: Saque Aniversário"
              required
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="autorization">&nbsp;Autorização:</label>
            <input
              type="text"
              id="autorization"
              name="autorization"
              placeholder="Ex: Sim"
              required
            />
          </div>
          <div>
            <label htmlFor="withdrawAtendant">&nbsp;Atendente do Saque:</label>
            <input
              type="text"
              id="withdrawAtendant"
              name="withdrawAtendant"
              placeholder="Ex: Maria Joaquina"
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="withdrawDate">&nbsp;Data do Saque:</label>
            <input type="date" id="withdrawDate" name="withdrawDate" />
          </div>
          <div>
            <label htmlFor="observation">&nbsp;Observação:</label>
            <input
              type="text"
              id="observation"
              name="observation"
              placeholder="Ex: Observação"
            />
          </div>
        </section>
        <div>
          <label htmlFor="description">&nbsp;Descrição:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Ex: Descrição"
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
