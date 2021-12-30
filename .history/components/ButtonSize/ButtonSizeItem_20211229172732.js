
import { Button } from "../Product/Product.styled"

export const ButtonSizeItem = ((items) => {

    return (
        <>
            {
                items?.buttons?.map(item => {
                    return (
                        <>
                            <Button>{item}</Button>
                        </>
                    )
                })
            }
        </>
    )

})