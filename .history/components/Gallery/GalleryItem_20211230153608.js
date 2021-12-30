/* eslint-disable @next/next/no-img-element */
export const GalleryItem = ({ photos }) => {
    return (
        <>

            {
                items.map((item, i) => {
                    return (
                        <img src={item} key={i} alt="vestido"></img>
                    )
                })
            }


        </>
    )



}