import styled, { css } from 'styled-components'



export const ContainerProduct = styled.div` 
  @media screen and (max-width: 510px){
    padding: 0 20px;
    margin-top: 28px; 
  }  

  @media screen and (min-width: 560px){
    display: flex;
  }


   
 `

export const Button = styled.a`
     padding-top: 20px
 `




export const SelectSizeTitle = styled.p`
  @media screen and (max-width: 510px){
    font-family: 'Roboto Mono'; 
    font-size: 0.625rem;  
    margin-top: -50px;   
    font-style: normal; 
    font-weight: bold; 
    font-size: 10px; 
    line-height: 13px;
  }

 `


export const SelectColorTitle = styled.p`
  @media screen and (max-width: 510px){
    font-family: 'Roboto Mono'; 
    font-size: 0.625rem;  
    margin-top: 10px;
    font-style: normal; 
    font-weight: bold; 
    font-size: 10px; 
    line-height: 13px;
  }

 `



export const Category = styled.h3` 
  
  @media screen and (max-width: 600px){
     position: absolute;  
     top: 15%;
  }

  font-family: 'Roboto Mono' ;
  font-weight: 700; 
  font-size: "0.625rem"; 
`;









export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

`;

export const ColorWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

`;