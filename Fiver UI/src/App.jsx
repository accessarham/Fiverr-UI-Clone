import React from 'react';
import Navbar from './components/homepage/navbar/Navbar';
import Footer from './components/homepage/footer/Footer';
import Home from './pages/homepage/homepage';
import AddNewGig from './pages/addGigs/addGig';
import Gig from './pages/gig/gig';
import Gigs from './pages/gigs/Gigs';
import MyGigs from './pages/myGigs/myGigs';
import Orders from './pages/orders/orders';
import Message from './pages/message/message';
import Messages from './pages/messages/messages';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import './App.scss';

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/gigs',
          element: <Gigs />,
        },
        {
          path: '/gig/:id',
          element: <Gig />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/mygigs',
          element: <MyGigs />,
        },
        {
          path: '/addnewgig',
          element: <AddNewGig />,
        },
        {
          path: '/messages',
          element: <Messages />,
        },
        {
          path: '/message/:id',
          element: <Message />,
        },
      ],
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
