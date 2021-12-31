 import { ColorsItem } from "./ColorsItem"
 
 export const Colors = (props) => { 

    console.log(props)

  

    return(
        <>             
     <ColorsItem {...props}></ColorsItem>
        </>
    )
     


}