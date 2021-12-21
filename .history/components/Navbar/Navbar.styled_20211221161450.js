import styled from "styled-components";

export const ContainerNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    background-color: green;
    justify-content: space-between;
    width: 100%;
    img{
        width: 200px;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

    }
    svg{
        width: 40px;
    }
`