import { SizeButton } from "../ShowCaseItem/ShowCaseItem.styled"


export const ButtonColorsItem = ((props) => {
    console.log(props);
    return (
        <>
            {
                props.photos.map((item, i) => {
                    return (
                        <SizeButton primary style={{ backgroundColor: `${item.color}` }} key={i} name={item.color} onClick={props.showImage(item.url)} />
                    )
                })
            }

        </>
    )

})