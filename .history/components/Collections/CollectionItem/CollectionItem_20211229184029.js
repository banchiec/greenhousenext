export const CollectionItem = (props) => {
    const { category } = props
    return (
        <div>
            <h1>{category.name}</h1>
        </div>
    )
}
