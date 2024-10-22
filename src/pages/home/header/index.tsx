import { IHeader } from "./model";
import { HeaderContainer } from "./style";
import Navbar from "../components/Navbar";

const Header = (_props: IHeader) => {

    return (
        <HeaderContainer className="header">
           <Navbar/>
        </HeaderContainer>
    );
}

export default Header;
