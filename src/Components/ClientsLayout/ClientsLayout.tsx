import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const ClientsLayout: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <>
      <main>
        <h1>Dados dos Clientes</h1>
        <div className="tabs">
          <Link
            to="/clients"
            className={`tab ${pathname === '/clients' ? 'active' : ''}`}
          >
            Todos os Clientes
          </Link>
          <Link
            to="/clients/new"
            className={`tab ${pathname === '/clients/new' ? 'active' : ''}`}
          >
            Novo Cliente
          </Link>
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default ClientsLayout;
