import { INavbar } from "./model";
import { NavContainer } from "./style";
import { SollerLogo } from '../../../../assets'
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar(_props: INavbar) {

    const navigate = useNavigate();

    const goToProductsPage = () => {
        navigate('/products')
    }

    return (
        <NavContainer className="navbar">
            <img src={SollerLogo} className="logo" width={300} onClick={goToProductsPage}/>

            <ul>
                <li>
                    <NavLink to="/products" >Products</NavLink>
                </li>

                <li>
                    <NavLink to="/solutions" >Solutions</NavLink>
                </li>

                <li>
                    <NavLink to="/services" >Services</NavLink>
                </li>

                <li>
                    <NavLink to="/configure" >Configure</NavLink>
                </li>
            </ul>
        </NavContainer>
    )
}