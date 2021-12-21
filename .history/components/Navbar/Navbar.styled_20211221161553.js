import styled from "styled-components";

export const ContainerNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    background-color: green;
    justify-content: space-around;
    width: 100%;
    img{
        width: 150px;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }

    }
    svg{
        width: 30px;
    }
`