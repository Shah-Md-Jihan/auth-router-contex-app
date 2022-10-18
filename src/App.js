import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Main from './layouts/Main';
import PrivateRoutes from './routes/PrivateRoutes';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRoutes>
            <Home></Home>
          </PrivateRoutes>
        },
        {
          path: '/orders',
          element: <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        },
        {
          path: '/login',
          element: <SignIn></SignIn>
        },
        {
          path: '/register',
          element: <SignUp></SignUp>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
