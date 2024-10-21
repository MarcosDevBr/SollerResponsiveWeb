import React from "react";
import { INavbar } from "./model";
import { NavContainer } from "./style";
import { SollerLogo } from '../../../../assets'


export default function Navbar(_props: INavbar) {
    return (
        <NavContainer className="navbar">
            <img src={SollerLogo} className="logo" width={300}/>

            <ul>
                <li>Products</li>
                <li>Solutions</li>
                <li>Services</li>
                <li>Configure</li>
            </ul>
        </NavContainer>
    )
}