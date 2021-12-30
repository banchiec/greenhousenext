 import { SizeButton } from "../Product/Product.styled"


export const ColorsItem = ((item) => {  
    console.log(item.palitrs)
  
      return( 
          <>  
          {
              item.palitrs.map((item, i) => { 
                  console.log(item)
                  return(
                      <SizeButton primary style={{ backgroundColor: `${item}` }} key={i} name={item} ></SizeButton>   
                  )
              })
          }
           
          </>
      )

})