 import { ButtonCardItem } from "./ButtonCardItem"

 export const ButtonCard = (props) => { 

    console.log(props) 
      return(
          <>
              <ButtonCardItem {...props}></ButtonCardItem>
          </>
      )
 }