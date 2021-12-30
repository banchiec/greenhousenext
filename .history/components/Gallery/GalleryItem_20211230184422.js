/* eslint-disable @next/next/no-img-element */
export const GalleryItem = (props) => {

    console.log(props)

    return (
        <>
            {
                props.photos?.map((photo, i) => {
                    return {
                        < div >
                        <img src={photo} key={i} alt="vestido"></img>
                        </div>
}
                })
            }


        </>
    )



}