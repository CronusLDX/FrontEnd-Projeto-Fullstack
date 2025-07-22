import React from 'react';
import { Main, StyledLink } from './styled';
import { useParams } from 'react-router-dom';
import { useClient } from '../../contexts/ClientContext';

const ShowClients: React.FC = () => {
  const { seqId } = useParams();
  const { clients } = useClient();

  const item = clients.find(client => client.seqId === seqId);

  if (!item)
    return (
      <div>
        <h1>Item not found</h1>
      </div>
    );
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
              value={item.name}
              disabled
            />
          </div>
          <div>
            <label htmlFor="cpf">&nbsp;CPF:</label>
            <input
              type="text"
              id="cpf"
              placeholder="Ex: 123.456.789-00"
              value={item.cpf}
              disabled
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="dateOfBirth">&nbsp;Data de Nascimento:</label>
            <input
              type="date"
              id="dateOfBirth"
              placeholder="Ex: 01/01/2000"
              value={item.dateOfBirth}
              disabled
            />
          </div>
          <div>
            <label htmlFor="email">&nbsp;Email:</label>
            <input
              type="text"
              id="email"
              placeholder="Ex: 2lG7I@example.com"
              value={item.email}
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
              value={item.phone}
              disabled
            />
          </div>
          <div>
            <label htmlFor="status">&nbsp;Status:</label>
            <input
              type="text"
              id="status"
              placeholder="Ex: ativo"
              value={item.status}
              disabled
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
              value={item.fgtsBalance}
              disabled
            />
          </div>
          <div>
            <label htmlFor="balanceWithdraw">&nbsp;Saldo Sacado (R$):</label>
            <input
              type="text"
              id="balanceWithdraw"
              placeholder="Ex: 0.0"
              value={item.balanceWithdraw}
              disabled
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="dateOfRegistration">&nbsp;Data de Registro:</label>
            <input
              type="date"
              id="dateOfRegistration"
              placeholder="Ex: 01/01/2023"
              value={item.dateOfRegistration}
              disabled
            />
          </div>
          <div>
            <label htmlFor="modality">&nbsp;Modalidade:</label>
            <input
              type="text"
              id="modalidade"
              placeholder="Ex: Saque Aniversário"
              value={item.modality}
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
              value={item.autorization}
              disabled
            />
          </div>
          <div>
            <label htmlFor="withdrawAtendant">&nbsp;Atendente do Saque:</label>
            <input
              type="text"
              id="withdrawAtendant"
              placeholder="Ex: Maria Joaquina"
              value={item.withdrawAtendant}
              disabled
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="withdrawDate">&nbsp;Data do Saque:</label>
            <input
              type="date"
              id="withdrawDate"
              placeholder="Ex: 01/01/2023"
              value={item.withdrawDate}
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
              value={item.observation}
              disabled
            />
          </div>
        </section>
        <div>
          <label htmlFor="description">&nbsp;Descrição:</label>
          <textarea
            name="description"
            id="description"
            value={item.description}
            disabled
          ></textarea>
        </div>
        <button type="button">
          <StyledLink to="/clients">Voltar</StyledLink>
        </button>
      </form>
      <footer>
        Criado em &nbsp; <span>{item.createdAt}</span>
        &nbsp; &nbsp; ID: &nbsp; <span>{item.seqId}</span>
        &nbsp; &nbsp; Atualizado em: &nbsp;
        <span>{item.updatedAt}</span>
      </footer>
    </Main>
  );
};

export default ShowClients;
