/* eslint-disable @next/next/no-img-element */
export const GalleryItem = (props) => {

    console.log(props)

    return (
        <div >
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