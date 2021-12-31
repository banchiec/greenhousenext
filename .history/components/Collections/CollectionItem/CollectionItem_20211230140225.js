import { ContainerItem } from "./CollectionItem.styled";
export function CollectionItem(props) {
    const { category } = props;
    console.log(props);
    return (
        <ContainerItem bacground={category.photo}>
            <img src={category.photo} alt={category.name} />
            <div>
                <h2>{category.name}</h2>
                <button>Black Friday</button>
            </div>
        </ContainerItem>
    );
}