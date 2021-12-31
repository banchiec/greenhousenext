/* eslint-disable @next/next/no-img-element */
export const GalleryItem = (props) => { 

   


      
    return (
        <> 
        
            {
                // !props.isActive ? (
                props.photos?.map((photo, i) => {
                    return (
                        <img   src={photo.url} key={i} alt="vestido"></img>
                    )
                })
                // )
                // :
                // <img src={props.photos[1]}></img>
            }
        </>
    )
}