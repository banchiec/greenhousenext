import { SizeButton } from "../ShowCaseItem/ShowCaseItem.styled"


export const ButtonColorsItem = ((props) => {
    console.log(props)
    return (
        <>
            {
                props.palitrs.map((item, i) => {
                    return (
                        <SizeButton primary style={{ backgroundColor: `${item}` }} key={i} name={item} />
                    )
                })
            }

        </>
    )

})