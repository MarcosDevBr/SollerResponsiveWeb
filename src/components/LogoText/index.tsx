import { ILogoText } from "./model";
import { LogoTextConteiner } from "./style";
import { NavLink } from "react-router-dom";

export default function LogoText(_props: ILogoText) {
    return (
        <LogoTextConteiner className="logo">
            <span className="text_logo">
                <NavLink to="/" >Soller</NavLink>
            </span>
        </LogoTextConteiner>
    )
}