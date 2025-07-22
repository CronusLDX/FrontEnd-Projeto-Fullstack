import React from 'react';
import { Main, StyledLinkAtualizar, StyledLnkVer } from './styled';
import type { ClientProps } from '../../interfaces/Interface';
import { useClient } from '../../contexts/ClientContext';
import { formattedCurrency } from '../../utility/FormatCurrency';

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
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>
                {client.balanceWithdraw
                  ? formattedCurrency(
                      client.fgtsBalance - client.balanceWithdraw
                    )
                  : formattedCurrency(client.fgtsBalance)}
              </td>
              <td>{client.status}</td>
              <td>
                <StyledLnkVer to={`/clients/${client.id}/show`}>
                  Ver
                </StyledLnkVer>
                <StyledLinkAtualizar to={`/clients/${client.id}`}>
                  Atualizar
                </StyledLinkAtualizar>
                <button
                  id="delete-button"
                  onClick={() => deleteClient(client.id)}
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
