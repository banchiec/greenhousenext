/* eslint-disable @next/next/no-img-element */
export const GalleryItem = (props) => {


    // console.log(props.getFirstColor)
    console.log(props)

    return (
        <>

            {
                props.isActive ? (
                    props.photos?.map((photo, i) => {
                        return (
                            <img src={photo.url} key={i} alt="vestido"></img>
                        )
                    })
                )
                    : <p>Loading</p>
            }
        </>
    )
}