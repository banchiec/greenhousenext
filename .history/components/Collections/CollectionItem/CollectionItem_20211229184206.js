export const CollectionItem = (props) => {
    const { category } = props
    console.log(props)
    return (
        <div>
            <h1>{category.name}</h1>
        </div>
    )
}
