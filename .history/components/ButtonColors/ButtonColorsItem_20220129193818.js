import { SizeButton } from "../ShowCaseItem/ShowCaseItem.styled"


export const ButtonColorsItem = (props) => {
    return (
        <>
            {
                props.photos.map((item, i) => {
                    console.log(item);
                    return (
                        <SizeButton primary style={{ backgroundColor: `${item.color}` }} key={i} name={item.color} onClick={props.showImage(item.url)} />
                    )
                })
            }

        </>
    )

}