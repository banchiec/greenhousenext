import { useEffect, useState } from "react"

/* eslint-disable @next/next/no-img-element */
export const GalleryItem = (props) => {
    const [isActive, setIsActive] = useState()

    console.log(props)

    useEffect(() => {

    }, [input])
    return (
        <>

            {
                !props.isActive ? (

                    props.photos?.map((photo, i) => {
                        return (
                            <img src={photo.url} key={i} alt="vestido" ></img>
                        )
                    })
                )
                    : <p>Loading</p>
            }
        </>
    )
}