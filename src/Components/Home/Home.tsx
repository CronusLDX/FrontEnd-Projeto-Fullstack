import React from 'react';
import { Link } from 'react-router-dom';
import { useClient } from '../../contexts/ClientContext';
import { formattedCurrency } from '../../utility/FormatCurrency';
import type { ClientProps } from '../../interfaces/Interface';

const Home: React.FC = () => {
  const { clients } = useClient();

  const calculateTotalBalance = (): number => {
    const totalFGTSBalance: number = clients.reduce(
      (acc, client) => acc + client.fgtsBalance,
      0
    );
    const totalBalanceWithdraw: number = clients.reduce((acc, client) => {
      if (client.balanceWithdraw) {
        return acc + client.balanceWithdraw;
      }
      return acc;
    }, 0);

    return totalFGTSBalance - totalBalanceWithdraw;
  };

  const newTotalBalance: number = calculateTotalBalance();

  const clientsAddedRecently: ClientProps[] = clients.filter(client => {
    const createdAt = client.createdAt ? new Date(client.createdAt) : null;
    const now = new Date();
    if (!createdAt) return false;
    const diffDays = Math.floor(
      (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
    );
    console.log(diffDays);
    return diffDays <= 30;
  });

  const clientsAvailable: ClientProps[] = clients.filter(client => {
    const now = new Date();

    if (client.withdrawDate) {
      const withdrawDate = new Date(client.withdrawDate);
      const diffDays = Math.floor(
        (now.getTime() - withdrawDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (diffDays > 30) {
        return (
          client.status === 'ativo' &&
          client.fgtsBalance > 0 &&
          client.autorization === 'sim'
        );
      } else {
        return false;
      }
    } else {
      return (
        client.status === 'ativo' &&
        client.fgtsBalance > 0 &&
        client.autorization === 'sim'
      );
    }
  });

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="row">
        <div className="dashboard-card">
          Total de Clientes
          <span>{clients.length}</span>
        </div>
        <div className="dashboard-card">
          Total de Saldo FGTS disponível para sacar
          <span>{formattedCurrency(newTotalBalance)}</span>
        </div>
        <div className="dashboard-card">
          Clientes Adicionados Recentemente
          <span>{clientsAddedRecently.length}</span>
        </div>
        <div className="dashboard-card">
          Clientes disponiveis para sacar
          <span>{clientsAvailable.length}</span>
        </div>
      </div>
      <div className="row">
        <div className="recent">
          <table>
            <thead>
              <tr>
                <th>Clientes Adicionados Recentemente</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {clientsAddedRecently.map(client => (
                <tr key={client.seqId}>
                  <td>{client.name}</td>
                  <td>
                    <Link
                      to={`/clients/${client.seqId}`}
                      className="button is-small"
                    >
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="low">
          <table>
            <thead>
              <tr>
                <th>Clientes disponiveis para saque</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {clientsAvailable.map(client => (
                <tr key={client.seqId}>
                  <td>{client.name}</td>
                  <td>
                    <Link
                      to={`/clients/${client.seqId}`}
                      className="button is-small"
                    >
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Home;
