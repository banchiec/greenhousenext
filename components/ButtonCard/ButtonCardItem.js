import { useEffect, useState } from "react"
import { ButtonCard } from "./ButtonCard"
import { Buttoncard } from "./ButtonCardItem.styled"


export const ButtonCardItem = ((props) => {

    console.log(props)


    return (
        <>
            <div>
                <Buttoncard>Add to card - €{props.price} </Buttoncard>
                <button>da</button>
            </div>
        </>
    )
})