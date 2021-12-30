import { ContainerButtonColor } from "./ButtonColors.styled"
import { ButtonColorsItem } from "./ButtonColorsItem"

export const ButtonColors = (props) => {

    return (
        <ContainerButtonColor>
            <h3>SELECT COLOR </h3>
            <ButtonColorsItem {...props}></ButtonColorsItem>
        </ContainerButtonColor>
    )



}