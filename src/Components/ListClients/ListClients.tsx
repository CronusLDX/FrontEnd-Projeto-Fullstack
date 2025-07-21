import React from 'react';
import { Main, StyledLinkAtualizar, StyledLnkVer } from './styled';
import type { ClientProps } from '../../interfaces/Interface';

const ListClients: React.FC = () => {
  const [client, setClient] = React.useState<ClientProps[]>([
    {
      seqId: 1,
      name: 'João Pedro Barbosa',
      cpf: '123.456.789-00',
      dateOfBirth: '01/01/2000',
      email: '2lG7I@example.com',
      phone: '(11) 99999-9999',
      status: 'ativo',
      fgtsBalance: 1000.0,
      balanceWithdraw: 0.0,
      dateOfRegistration: '01/01/2023',
      modality: 'Saque Aniversário',
      observation: 'Observação',
      autorization: 'sim',
      withdrawAtendant: 'Maria Joaquina',
      withdrawDate: '01/01/2023',
      createdAt: '01/01/2023',
      updatedAt: '01/01/2023',
    },
  ]);
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
          {client.map((client: ClientProps) => (
            <tr key={client.seqId}>
              <td>{client.seqId}</td>
              <td>{client.name}</td>
              <td>{client.fgtsBalance}</td>
              <td>{client.status}</td>
              <td>
                <StyledLnkVer to={`/clients/:seqId`}>Ver</StyledLnkVer>
                <StyledLinkAtualizar to={`/clients/:seqId/update`}>
                  Atualizar
                </StyledLinkAtualizar>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Main>
  );
};

export default ListClients;
