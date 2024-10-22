import { INavbar, INavItem } from "./model";
import { NavContainer, NavLeft } from "./style";
import { NavLink } from "react-router-dom";
import LogoText from "../../../../components/LogoText";

export default function Navbar(_props: INavbar) {

    const navItems: INavItem[] = [
        { path: "/products", label: "Products" },
        { path: "/solutions", label: "Solutions" },
        { path: "/services", label: "Services" },
        { path: "/configure", label: "Configure" },
    ];
    
    return (
        <NavContainer className="navbar">
            
            <NavLeft className="navbar-left">

                <LogoText/>

                <ul>
                    {navItems.map((item) => (
                        <li key={item.path} className="menu_item">
                            <NavLink to={item.path}>{item.label}</NavLink>
                        </li>
                    ))}
                </ul>
                
            </NavLeft>

        </NavContainer>
    )
}