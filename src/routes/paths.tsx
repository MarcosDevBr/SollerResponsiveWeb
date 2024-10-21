import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products";
import Solutions from "../pages/Solutions";
import Services from "../pages/Services";
import Configure from "../pages/Configure";
import App from "../App";
import NotFound from "../pages/NotFount";

export const router = createBrowserRouter([
    { 
        path: "/", 
        element: <App/>,
        errorElement: <NotFound/>,
    },
    { 
        path: "/Products", 
        element: <Products/>
    },
    { 
        path: "/Solutions", 
        element: <Solutions/> 
    },
    { 
        path: "/Services", 
        element: <Services/> 
    },
    { 
        path: "/Configure", 
        element: <Configure/> 
    },
])
