import { SizeButton } from "../ShowCaseItem/ShowCaseItem.styled"


export const ColorsItem = ((item) => {
    return (
        <>
            {
                item.palitrs.map((item, i) => {
                    console.log(item)
                    return (
                        <SizeButton primary style={{ backgroundColor: `${item}` }} key={i} name={item} ></SizeButton>
                    )
                })
            }

        </>
    )

})