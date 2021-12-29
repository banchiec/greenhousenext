import styled, { css } from 'styled-components'


  
 export const Container = styled.div` 
  @media screen and (max-width: 450px){
    padding: 0 20px;
    margin-top: 28px; 
  }
   
 `
 
 export const Button = styled.a`
     @media screen and (max-width: 450px){
     position: absolute;  
     top: 50%;
  }
 `  
 


 
 export const SelectSizeTitle  = styled.p `
  @media screen and (max-width: 450px){
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
  @media screen and (max-width: 450px){
    font-family: 'Roboto Mono'; 
    font-size: 0.625rem;  
    margin-top: 10px;
    font-style: normal; 
    font-weight: bold; 
    font-size: 10px; 
    line-height: 13px;
  }

 `
 


 export  const Category = styled.h3` 
  
  @media screen and (max-width: 450px){
     position: absolute;  
     margin-top: 30px;
  }

  font-family: 'Roboto Mono' ;
  font-weight: 700; 
  font-size: "0.625rem"; 
`;  
  






export const SizeButton = styled.button`
  {
     width: 54.13px;   
     height: 40.96px;
     border: 1px solid #131212;   
     color:  ${({ color }) => color || "white" }
     font-family: 'Alegreya Sans';
     font-weight: 500;
     line-height: 24px; 
     text-align: center;  
     padding-top: 20px; 
     font-weight: bold; 
}     

${props =>
    props.primary &&
    css`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: inline-block;
 
    `};
`; 

 



export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

`;

export const ColorWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

`;