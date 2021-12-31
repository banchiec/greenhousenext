import { ContainerButtonColor } from "./ButtonColors.styled"
import { ColorsItem } from "./ButtonColorsItem"

export const ButtonColors = (props) => {

    return (
        <ContainerButtonColor>
            <h3>SELECT COLOR </h3>
            <ColorsItem {...props}></ColorsItem>
        </ContainerButtonColor>
    )



}