
export function CollectionItem(props) {
    const { category } = props;
    console.log(props);
    return (
        <div>
            <h1>{category.name}</h1>
            <img src={category.photo} alt={category.name} />
        </div>
    );
}