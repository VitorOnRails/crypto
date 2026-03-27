import Dashboard from './pages/Dashboard/Dashboard';
import Transacao from './pages/Transacao/Transacao';
import Suporte from './pages/Suporte/Suporte';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/central" replace />,
  },
  {
    path: "/central",
    element: <Dashboard />,
  },
  {
    path: "/transacoes",
    element: <Transacao />,
  },
  {
    path: "/suporte",
    element: <Suporte />,
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
};

export default App;
