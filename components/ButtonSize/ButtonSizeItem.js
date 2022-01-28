
import { useEffect, useState } from "react" 
import { SizeButton } from "./ButtonSizeItem.styled"

export const ButtonSizeItem = (props) => { 
 
     console.log(props)

    const [active, setActive] = useState("false")


   

    return (
        <> 
            <p>Select Size</p>
            {  
                
                props.buttons?.map((item, i) => { 
                    console.log(item)
                    return (
                        <>   
                            <SizeButton key={i} className={active === i ? "danger" : "null"} onClick={(() => setActive(i))}>{item}</SizeButton>
                        </>
                    )
                })

            }
        </>
    )
} 




