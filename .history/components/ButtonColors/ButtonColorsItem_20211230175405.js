import { SizeButton } from "../ShowCaseItem/ShowCaseItem.styled"


export const ButtonColorsItem = ((item) => {
    console.log(item)
    return (
        <>
            {
                item.palitrs.map((item, i) => {
                    return (
                        <SizeButton primary style={{ backgroundColor: `${item}` }} key={i} name={item} ></SizeButton>
                    )
                })
            }

        </>
    )

})