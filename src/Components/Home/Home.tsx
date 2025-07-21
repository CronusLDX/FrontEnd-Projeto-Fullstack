import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main>
      <h1>Dashboard</h1>
      <div className="row">
        <div className="dashboard-card">
          Total de Clientes
          <span>100</span>
        </div>
        <div className="dashboard-card">
          Total de Saldo FGTS disponível para sacar
          <span>80</span>
        </div>
        <div className="dashboard-card">
          Clientes Adicionados Recentemente
          <span>20</span>
        </div>
        <div className="dashboard-card">
          Clientes disponiveis para sacar
          <span>10</span>
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
              <tr>
                <td>Joao Pedro</td>
                <td>
                  <Link to={`/clients`} className="button is-small">
                    Ver
                  </Link>
                </td>
              </tr>
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
              <tr>
                <td>Joao Pedro</td>
                <td>
                  <Link to={`/clients`} className="button is-small">
                    Ver
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Home;
