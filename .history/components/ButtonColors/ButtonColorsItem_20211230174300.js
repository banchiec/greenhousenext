import { SizeButton } from "../ShowCaseItem/ShowCaseItem.styled"


export const ColorsItem = ((item) => {
    return (
        <>
            <h2>SELECT COLOR </h2>
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