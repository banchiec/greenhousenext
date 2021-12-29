import styled from "styled-components";

export const ContainerNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    background-color: #218154;
    justify-content: space-between;
    padding: 10px 15px 10px 15px;
    width: 100%;
    img{
        width: 180px;
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
        width: 25px;
        color: white;
        height: 30px;
        margin: 0 10px 0 10px;

    }
`