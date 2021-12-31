/* eslint-disable @next/next/no-img-element */
export const GalleryItem = ({ photos }) => {
    return (
        <>
            {
                photos?.map((photo, i) => {
                    return (
                        <img src={photo} key={i} alt="vestido"></img>
                    )
                })
            }


        </>
    )



}