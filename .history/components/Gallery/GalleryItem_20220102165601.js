import { useEffect, useState } from "react"

/* eslint-disable @next/next/no-img-element */
export const GalleryItem = (props) => {
    const [isActive, setIsActive] = useState()


    // console.log(props.getFirstColor)
    console.log(props)

    useEffect(() => {

    }, [])

    return (
        <>

            {
                !props.isActive ? (

                    props.photos?.map((photo, i) => {
                        return (
                            <h1>{photo.color}</h1>

                        )
                    })
                )
                    : <p>Loading</p>
            }
        </>
    )
}