import React from 'react';
import { Main, StyledLink } from './styled';
import { useParams } from 'react-router-dom';
import { useClient } from '../../contexts/ClientContext';

const ShowClients: React.FC = () => {
  const { id } = useParams();
  const { clients } = useClient();

  // Garantir que id seja comparado como string ou number, dependendo do tipo original
  const item = clients.find(client => String(client.id) === String(id));

  if (!item) {
    return (
      <Main>
        <h1>Cliente não encontrado</h1>
        <StyledLink to="/clients">Voltar para lista</StyledLink>
      </Main>
    );
  }

  return (
    <Main>
      <form>
        <section>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" value={item.name ?? ''} disabled />
          </div>
          <div>
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" value={item.cpf ?? ''} disabled />
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="dateOfBirth">Data de Nascimento:</label>
            <input
              type="date"
              id="dateOfBirth"
              value={item.dateOfBirth ?? ''}
              disabled
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={item.email ?? ''} disabled />
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="phone">Telefone:</label>
            <input type="text" id="phone" value={item.phone ?? ''} disabled />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <input type="text" id="status" value={item.status ?? ''} disabled />
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="fgtsBalance">Saldo do FGTS (R$):</label>
            <input
              type="text"
              id="fgtsBalance"
              value={item.fgtsBalance ?? ''}
              disabled
            />
          </div>
          <div>
            <label htmlFor="balanceWithdraw">Saldo Sacado (R$):</label>
            <input
              type="text"
              id="balanceWithdraw"
              value={item.balanceWithdraw ?? ''}
              disabled
            />
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="dateOfRegistration">Data de Registro:</label>
            <input
              type="date"
              id="dateOfRegistration"
              value={item.dateOfRegistration ?? ''}
              disabled
            />
          </div>
          <div>
            <label htmlFor="modalidade">Modalidade:</label>
            <input
              type="text"
              id="modalidade"
              value={item.modality ?? ''}
              disabled
            />
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="autorization">Autorização:</label>
            <input
              type="text"
              id="autorization"
              value={item.autorization ?? ''}
              disabled
            />
          </div>
          <div>
            <label htmlFor="withdrawAtendant">Atendente do Saque:</label>
            <input
              type="text"
              id="withdrawAtendant"
              value={item.withdrawAtendant ?? ''}
              disabled
            />
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="withdrawDate">Data do Saque:</label>
            <input
              type="date"
              id="withdrawDate"
              value={item.withdrawDate ?? ''}
              disabled
            />
          </div>
          <div>
            <label htmlFor="observation">Observação:</label>
            <input
              type="text"
              id="observation"
              value={item.observation ?? ''}
              disabled
            />
          </div>
        </section>

        <div>
          <label htmlFor="description">Descrição:</label>
          <textarea id="description" value={item.description ?? ''} disabled />
        </div>

        <button type="button">
          <StyledLink to="/clients">Voltar</StyledLink>
        </button>
      </form>

      <footer>
        Criado em: <span>{item.createdAt ?? '-'}</span> &nbsp; | &nbsp; ID:{' '}
        <span>{item.id ?? '-'}</span> &nbsp; | &nbsp; Atualizado em:{' '}
        <span>{item.updatedAt ?? '-'}</span>
      </footer>
    </Main>
  );
};

export default ShowClients;
