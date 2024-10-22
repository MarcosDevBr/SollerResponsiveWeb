import styled, { keyframes } from 'styled-components';

const HeaderContainer = styled.header`
    z-index: 500;
    background-color: var(--white);
    height: 6.25rem;
    transition: color .25s, background-color .25s;
    display: flex;
    position: fixed;
    top: 0%;
    bottom: auto;
    left: 0%;
    right: 0%;
`;

const NavMenu = styled.nav`
    grid-column-gap: 4rem;
    flex: 1;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: flex-end;
    align-items: center;
    justify-items: center;
    padding-left: 10%;
    padding-right: 4rem;
    display: flex;
`;

const NavRight = styled.nav`
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    flex: none;
    justify-content: flex-end;
    align-items: center;
    width: auto;
    display: flex;
`;


const NavItem = styled.a`
    display: flex;
    letter-spacing: .18125rem;
    text-transform: uppercase;
    margin-top: 2px;
    margin-bottom: 0;
    font-weight: 600;
    line-height: 1rem;
    transition: all .4s;
    flex-direction: row;
`;

const hoverEffect = keyframes`
    0% {
        transform: scale(1);
        background-color: transparent;
    }
    50% {
        transform: scale(1.1);
        background-color: rgba(0, 0, 0, 0.1);
    }
    100% {
        transform: scale(1.2);
        background-color: black;
    }
`;

const Button = styled(NavItem)`
    display: flex;
    position: relative;
    height: 55.5px;
    padding: 10px 20px;
    border: 2px dotted #101314;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    overflow: hidden;
    transition: all 0.4s ease;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        right: -3px;
        bottom: -3px;
        border: 3px dotted #101314;
        z-index: -1; 
        pointer-events: none; 
    }

    &:hover {
        animation: ${hoverEffect} 0.4s forwards;
        color: white; 
    }
`;


 const NavItem2 = styled.a`
    letter-spacing: .18125rem;
    text-transform: uppercase;
    margin-top: 2px;
    margin-bottom: 0;
    font-weight: 600;
    line-height: 1rem;
    transition: all .4s;
    position: relative;
    text-decoration: none;
    color: black;
    border: 2px dotted transparent;
    padding: 8px 16px;
    display: inline-block;

    &:hover {
        color: white;
        background-color: black;
    }

    &.button-2 {
        border-color: black;
    }

    &.button-2::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px dotted black;
        box-sizing: border-box;
        z-index: -1;
    }

    &:hover::before {
        animation: fillBox 0.5s forwards;
    }

    @keyframes fillBox {
        0% {
            clip-path: inset(0 100% 0 0);
        }
        100% {
            clip-path: inset(0 0 0 0);
        }
    }
`;

const Logo = styled.div`
    align-items: center;
    width: 15%;
    display: flex;

    letter-spacing: .18125rem;
    text-transform: uppercase;
    margin-bottom: 0;
    font-weight: 600;
    line-height: 1rem;
    transition: all .4s;
    font-size: 18px;
`;

export {
    HeaderContainer,
    Logo,
    NavMenu,
    NavRight,
    NavItem,
    Button
}