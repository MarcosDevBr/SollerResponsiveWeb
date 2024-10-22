import { createBrowserRouter, Navigate } from "react-router-dom";
import Products from "../pages/Products";
import Solutions from "../pages/Solutions";
import Services from "../pages/Services";
import Configure from "../pages/Configure";
import Home from "../pages/home";
import NotFound from "../pages/NotFount";

export const router = createBrowserRouter([
    { 
        path: "/", 
        element: <Home />,
        children: [
            { index: true, element: <Navigate to="/products" replace /> },
            { path: "products", element: <Products /> },
            { path: "solutions", element: <Solutions /> },
            { path: "services", element: <Services /> },
            { path: "configure", element: <Configure /> },
           
        ],
        
    },
    { path: "*", element: <NotFound /> } 
]);
