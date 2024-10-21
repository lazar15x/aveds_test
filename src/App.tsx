import Header from './components/header/Header';
import { AuthProvider } from './components/login-modal/AuthContext';
import Account from './page/account/Account';
import Contacts from './page/contacts/Contacts';
import Home from './page/home/Home';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <AuthProvider>
          <Layout />
        </AuthProvider>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/contacts',
          element: <Contacts />,
        },
        {
          path: '/acc',
          element: <Account />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
