import { ColorButton } from "./ButtonColors.styled"




export const ButtonColorsItem = ((props) => {
    return (
        <>
            {
                props.palitrs.map((item, i) => {
                    return (
                         <ColorButton primary style={{ backgroundColor: `${item}` }} key={i} name={item} onClick={props.onShow} />
                    )
                })
            }

        </>
    )

})