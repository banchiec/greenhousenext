import { ContainerItem } from "./CollectionItem.styled";
export function CollectionItem(props) {
    const { category } = props;
    console.log(props);
    return (
        <ContainerItem img={category.photo}>
            <h1>hols</h1>
            {/* <img src={category.photo} alt={category.name} /> */}
        </ContainerItem>
    );
}