import styled from "styled-components";

export const ContainerNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    background-color: green;
    justify-content: space-between;
    padding: 0 15px 0 15px; 
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
        color: white;
        height: 30px;
        margin: 0 10px 0 10px;

    }
`