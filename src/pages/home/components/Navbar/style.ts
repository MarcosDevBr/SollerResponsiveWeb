import styled from 'styled-components'

const NavContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    padding: 15px 7%;

    ul {
        flex: 1;
        list-style: none;
        text-align: center;
    }
    ul li {
        display: inline-block;
        margin: 10px 20px;
        font-size: 18px;
        cursor: pointer;
    }

    a.active {
        color: #F59E0B;
    }

    .logo {
        width: 50;
        cursor: pointer;
    }
`

export {
    NavContainer
}