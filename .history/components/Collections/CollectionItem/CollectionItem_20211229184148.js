export const CollectionItem = (props) => {
    const { category } = props
    console.log(category)
    return (
        <div>
            <h1>{category.name}</h1>
        </div>
    )
}
