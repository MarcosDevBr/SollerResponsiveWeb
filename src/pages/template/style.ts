import tw from 'tailwind-styled-components'

const TemplateContainer = tw.div`
    flex
    flex-col
    w-full
    h-full
    py-0
    bg-[#fafafa]
`

const Header = tw.div`
    w-full
    h-500
`

const Content = tw.div`
    w-full
    flex-grow
    flex
    items-center
    justify-center
`

const Footer = tw.div`
   w-full
    h-20
    bg-gray-200
    flex
    items-center
    justify-center
    
`

export {
    TemplateContainer,
    Header,
    Content,
    Footer
}
