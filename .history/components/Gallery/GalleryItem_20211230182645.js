/* eslint-disable @next/next/no-img-element */
export const GalleryItem = (props) => {

    return (
        <div hidden={true}>
            {
                props.photos?.map((photo, i) => {
                    return (
                        <img src={photo} key={i} alt="vestido"></img>
                    )
                })
            }


        </div>
    )



}