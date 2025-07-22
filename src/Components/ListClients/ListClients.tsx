import React from 'react';
import { Main, StyledLinkAtualizar, StyledLnkVer } from './styled';
import type { ClientProps } from '../../interfaces/Interface';
import { useClient } from '../../contexts/ClientContext';

const ListClients: React.FC = () => {
  const { clients, deleteClient } = useClient();

  return (
    <Main>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Saldo do FGTS</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client: ClientProps) => (
            <tr key={client.seqId}>
              <td>{client.seqId}</td>
              <td>{client.name}</td>
              <td>{client.fgtsBalance}</td>
              <td>{client.status}</td>
              <td>
                <StyledLnkVer to={`/clients/${client.seqId}`}>Ver</StyledLnkVer>
                <StyledLinkAtualizar to={`/clients/${client.seqId}/update`}>
                  Atualizar
                </StyledLinkAtualizar>
                <button
                  id="delete-button"
                  onClick={() => deleteClient(client.seqId)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Main>
  );
};

export default ListClients;
