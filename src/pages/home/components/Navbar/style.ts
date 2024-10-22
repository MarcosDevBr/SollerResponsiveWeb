import styled from 'styled-components'

const NavContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;

    a.active {
        color: #F59E0B;
    }

    .navbar, ul {
        display: flex;
        align-items: center;
        gap: 38px;
    }

    .navbar, ul li {
        /* font-family: Roboto; TODO: check if you are going to use this font */
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.5px;
        text-align: left;
        color: #0F172A;
    }

`

const NavLeft = styled.nav`
    display: flex;
    flex-direction: row;    
    width: 511px;
    height:48pxx;
    gap: 38px;
    opacity: 0px;
`;

const NavRight = styled.nav`
    width: 489px;
    height: 64px;
    gap: 16px;
    opacity: 0px;
`;

export {
    NavContainer,
    NavRight,
    NavLeft
}