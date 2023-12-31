import React from "react";
import Navbar from "./Components/navbar/Navbar.jsx";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Footer from "./Components/footer/Footer.jsx";
import Home from "./pages/homes/Home.jsx";
import Gigs from "./pages/gigs/Gigs.jsx";
import Gig from "./pages/gig/Gig.jsx";
import Orders from "./pages/orders/Orders.jsx";
import MyGigs from "./pages/myGigs/MyGigs.jsx";
import Add from "./pages/add/Add.jsx";
import Message from "./pages/message/Message.jsx"
import Messages from "./pages/messages/Messages.jsx";
import "./App.scss"

function App() {
  const Layout = () => {
    return (<div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>)
  }
  const router = createBrowserRouter([{
    path: "/", element: <Layout/>,
    children: [
      {
        path: "/", element: <Home/>
      },
      {
        path: "/gigs", element: <Gigs/>
      },
      {
        path: "/gig/:id", element: <Gig/>
      },
      {
        path: "/orders", element: <Orders/>
      },
      {
        path: "/mygigs", element: <MyGigs/>
      },
      {
        path: "/add", element: <Add/>
      },
      {
        path: "/messages", element: <Messages/>
      },
      {
        path: "/message/:id", element: <Message/>
      },
      {
        path: "/", element: <Home/>
      },
      {
        path: "/", element: <Home/>
      },
    ]
  },]);
  return (<div>
    <RouterProvider router={router}/>
  </div>)
}

export default App
