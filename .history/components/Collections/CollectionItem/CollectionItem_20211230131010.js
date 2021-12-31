import { ContainerItem } from "../Collections.styled";

export function CollectionItem(props) {
    const { category } = props;
    console.log(props);
    return (
        <ContainerItem>
            <img src={category.photo} alt={category.name} />
        </ContainerItem>
    );
}