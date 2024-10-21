import React from 'react';
import tw from 'tailwind-styled-components'

import { RouterProvider } from "react-router-dom";

import { light } from '../styles/theme';
import { router } from './paths';

const MainRoutes = () => (
    <Container bgColor={light.SYSTEM_BACKGROUND}>
        <RouterProvider router={router}/>
    </Container>
);

export default MainRoutes;

const Container = tw.div<{ bgColor: string }>`  
    flex    
    flex-col
    w-full
    h-full
    overflow-hidden
    ${props => `bg-${props.bgColor}`}
`;
