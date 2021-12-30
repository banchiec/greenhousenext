import { ContainerItem } from "../Collections.styled";

export function CollectionItem(props) {
    const { category } = props;
    console.log(props);
    return (
        <ContainerItem>
            <h1>{category.name}</h1>
            <img src={category.photo} alt={category.name} />
        </ContainerItem>
    );
}