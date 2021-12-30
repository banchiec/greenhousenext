/* eslint-disable @next/next/no-img-element */
export const GalleryItem = ({ items }) => {

    console.log(items)
    return(
        <>  
 
        {
            items.map((item, i) => { 
                return(
                    <img src={item} key={i} alt="vestido"></img>
                )
            })
        }
       
        
        </>
    )



}