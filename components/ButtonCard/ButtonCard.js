import { ButtonCardItem } from "./ButtonCardItem"

export const CardButton = (props) => {

    console.log(props)
    return (
        <>
            <ButtonCardItem {...props}></ButtonCardItem>
        </>
    )
}

