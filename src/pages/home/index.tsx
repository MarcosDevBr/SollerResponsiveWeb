import { Container } from "./style";
import { IHomeProps } from "./model";
import TemplateHeaderContent from "../template";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

export default function Home(_props: IHomeProps) {

    return (
        <Container>
            <TemplateHeaderContent
                header={<Header />}
                footer={<Footer/>}
                content={<Outlet />}
            />
        </Container>
    )
}