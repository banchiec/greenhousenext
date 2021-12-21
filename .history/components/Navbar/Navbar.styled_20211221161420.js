import styled from "styled-components";

export const ContainerNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    background-color: green;
    width: 100%;
    img{
        width: 200px;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }

    }
    svg{
        width: 40px;
    }
`