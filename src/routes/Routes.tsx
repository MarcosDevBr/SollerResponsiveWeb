import tw from 'tailwind-styled-components';
import { RouterProvider } from 'react-router-dom';
import { router } from './paths';

export default function MainRoutes() {
    return (
        <Container>
            <RouterProvider router={router} />
        </Container>
    );
}

const Container = tw.div`  
    flex    
    flex-col
    w-full
    h-full
    overflow-hidden
`;
