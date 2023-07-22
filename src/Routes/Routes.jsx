import App from '../App.jsx';
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from '../components/pages/ErrorPage.jsx';
import Home from '../components/pages/Home.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children:[
        {
            path: '/',
            element: <Home />
        }
      ]
    },
  ]);
export default router;