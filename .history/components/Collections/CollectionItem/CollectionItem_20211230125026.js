import { Image } from "react-bootstrap";
export function CollectionItem(props) {
    const { category } = props;
    console.log(props);
    return (
        <div>
            <h1>{category.name}</h1>
            <Image src={category.photo} alt={category.name} />
        </div>
    );
}