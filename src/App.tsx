import { RouterProvider } from 'react-router';
import router from './Routes';
import { ClientProvider } from './contexts/ClientContext';

function App() {
  return (
    <>
      <ClientProvider>
        <RouterProvider router={router}></RouterProvider>
      </ClientProvider>
    </>
  );
}

export default App;
