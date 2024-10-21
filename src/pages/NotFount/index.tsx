import React from "react";
import { INotFound } from "./model";
import { NotFoundContainer } from "./style";
import { Link } from "react-router-dom";

export default function NotFound(_props: INotFound) {
    return (
        <NotFoundContainer>
          <h1>
            404 Not Found
          </h1>

           <Link to="/">Home</Link>
           
        </NotFoundContainer>
    )
}