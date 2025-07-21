import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          JPB ENTERPRISE ltda
        </Link>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/clients">Items</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>Todos os Direitos reservados {new Date().getFullYear()} ©</footer>
    </>
  );
};

export default RootLayout;
