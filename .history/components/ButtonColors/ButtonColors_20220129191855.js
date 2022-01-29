import { ContainerButtonColor } from "./ButtonColors.styled"
import { ButtonColorsItem } from "./ButtonColorsItem"

export const ButtonColors = (props) => {
    console.log(props);
    return (
        <>
            <h3>SELECT COLOR </h3>
            <ContainerButtonColor>
                <ButtonColorsItem {...props} />
            </ContainerButtonColor>
        </>
    )



}