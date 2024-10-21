import { Container } from "./style";
import { IHomeProps } from "./model";
import TemplateHeaderContent from "../template";
import Header from "./header";
import Footer from "./footer";

export default function Home(_props: IHomeProps) {

    return (
        <Container>
            <TemplateHeaderContent
                header={<Header />}
                footer={<Footer/>}
                content={(
                   <h2>
                   TODO: Here is the dinamic content
                   </h2>
                )}
            />
        </Container>
    )
}