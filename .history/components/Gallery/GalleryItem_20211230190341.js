/* eslint-disable @next/next/no-img-element */
export const GalleryItem = (props) => {

    console.log(props)

    return (
        <>
            {
                props.photos?.map((photo, i) => {
                    return (
                        <img src={photo[0]} key={i} alt="vestido"></img>
                    )
                })
            }


        </>
    )



}