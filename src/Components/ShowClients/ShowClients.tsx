import React from 'react';
import { Main, StyledLink } from './styled';

const ShowClients: React.FC = () => {
  return (
    <Main>
      <form>
        <section>
          <div>
            <label htmlFor="name">&nbsp;Nome:</label>
            <input
              type="text"
              id="name"
              placeholder="Ex: João Pedro"
              disabled
            />
          </div>
          <div>
            <label htmlFor="cpf">&nbsp;CPF:</label>
            <input
              type="text"
              id="cpf"
              placeholder="Ex: 123.456.789-00"
              disabled
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="dateOfBirth">&nbsp;Data de Nascimento:</label>
            <input
              type="text"
              id="dateOfBirth"
              placeholder="Ex: 01/01/2000"
              disabled
            />
          </div>
          <div>
            <label htmlFor="email">&nbsp;Email:</label>
            <input
              type="text"
              id="email"
              placeholder="Ex: 2lG7I@example.com"
              disabled
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
              disabled
            />
          </div>
          <div>
            <label htmlFor="status">&nbsp;Status:</label>
            <input type="text" id="status" placeholder="Ex: ativo" disabled />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="fgtsBalance">&nbsp;Saldo do FGTS (R$):</label>
            <input
              type="number"
              id="fgtsBalance"
              placeholder="Ex: 1000.0"
              disabled
            />
          </div>
          <div>
            <label htmlFor="balanceWithdraw">&nbsp;Saldo Sacado (R$):</label>
            <input
              type="number"
              id="balanceWithdraw"
              placeholder="Ex: 0.0"
              disabled
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
              disabled
            />
          </div>
          <div>
            <label htmlFor="modality">&nbsp;Modalidade:</label>
            <input
              type="text"
              id="modalidade"
              placeholder="Ex: Saque Aniversário"
              disabled
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
              disabled
            />
          </div>
          <div>
            <label htmlFor="withdrawAtendant">&nbsp;Atendente do Saque:</label>
            <input
              type="text"
              id="withdrawAtendant"
              placeholder="Ex: Maria Joaquina"
              disabled
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
              disabled
            />
          </div>
          <div>
            <label htmlFor="observation">&nbsp;Observação:</label>
            <input
              type="text"
              name="observation"
              id="observation"
              placeholder="Ex: Observação"
              disabled
            />
          </div>
        </section>
        <div>
          <label htmlFor="description">&nbsp;Descrição:</label>
          <textarea name="description" id="description" disabled></textarea>
        </div>
        <button type="button">
          <StyledLink to="/clients">Voltar</StyledLink>
        </button>
      </form>
      <footer>
        Criado em &nbsp; <span>{new Date().toLocaleString()}</span>
        &nbsp; &nbsp; ID: &nbsp; <span>sjdhjshdjsaishj-jsdjashdsaj-45455</span>
        &nbsp; &nbsp; Atualizado em: &nbsp;
        <span>{new Date().toLocaleString()}</span>
      </footer>
    </Main>
  );
};

export default ShowClients;
