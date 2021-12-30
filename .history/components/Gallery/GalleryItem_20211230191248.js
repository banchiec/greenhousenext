/* eslint-disable @next/next/no-img-element */
export const GalleryItem = (props) => {

    console.log(props)

    return (
        <>
            {
                !props.isActive ? (
                    props.photos?.map((photo, i) => {
                        console.log()
                        return (
                            <img src={photo} key={i} alt="vestido" hidden={true}></img>
                        )
                    }))
                    :
                    <img src={props.photos[1]}></img>
            }
        </>
    )



}