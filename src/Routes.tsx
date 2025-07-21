import { createBrowserRouter } from 'react-router';
import RootLayout from './Components/RootLayout/RootLayout';
import ClientsLayout from './Components/ClientsLayout/ClientsLayout';
import Home from './Components/Home/Home';
import ListClients from './Components/ListClients/ListClients';
import CreateClients from './Components/CreateClient/CreateClient';
import ShowClients from './Components/ShowClients/ShowClients';
import UpdateClients from './Components/UpddateClients/UpdateClients';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'clients',
        element: <ClientsLayout />,
        children: [
          { index: true, element: <ListClients /> },
          { path: 'new', element: <CreateClients /> },
          { path: ':seqId', element: <ShowClients /> },
          { path: ':seqId/update', element: <UpdateClients /> },
        ],
      },
    ],
  },
]);

export default router;
