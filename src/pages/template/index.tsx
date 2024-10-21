import React from "react"
import { TemplateContainer, Header, Content, Footer } from "./style"
import { ITemplateHeaderContentProps } from "./model"

export default function TemplateHeaderContent ({ 
    header,
    content,
    footer
}: ITemplateHeaderContentProps) {
    return (
        <TemplateContainer>
            <Header>
                {header}
            </Header>

            <Content>
                {content}
            </Content>

            <Footer>
                {footer}
            </Footer>
        </TemplateContainer>
    )
}
