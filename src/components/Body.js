import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./Login";
import Browse from "./Browse";
import MoviesDetail from "./MovieDetail";
import ReactDOM from "react-dom/client";
import NewLogin from './NewLogin';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/Browse',
        element: <Browse />,
    },
    {
        path: "/MovieDetail/:resId",
        element: <MoviesDetail />,
      },
]);

const Body = () => {
    return (
        <RouterProvider router={appRouter} />
    );
};

export default Body;
