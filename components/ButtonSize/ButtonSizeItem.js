  
  import { Button, SizeButton } from "../Product/Product.styled" 
import { useEffect, useState } from "react" 

 export const ButtonSizeItem = ((item) => {   
 
     const [active, setActive] = useState("false"); 


     console.log(item.buttons)
    
    return(
        <>   
        { 
             item.buttons.map((item, i ) => { 
                 return( 
                     <>
                         <SizeButton key={i} className={active === i ? "danger" : "null"} onClick={(() => setActive(i))}>{item}</SizeButton>
                     </>
                 )
             })
           
        }

        </>
    )
    
})



