import styled from "styled-components";

export const ContainerNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    background-color: #218154;
    justify-content: space-between;
    padding: 10px 15px 10px 15px;
    width: 100%;
    img{
        width: 120px;
        height: 40px;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        img{
            width: 25px;
            height: 25px;
            border-radius: 50%;
        }
    }
    svg{
        width: 23px;
        color: white;
        height: 30px;
        margin: 0 10px 0 10px;

    }
`