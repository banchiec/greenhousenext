import { ContainerItem } from "./CollectionItem.styled";
export function CollectionItem(props) {
    const { category } = props;
    console.log(props);
    return (
        <ContainerItem >
            <img src={category.photo} alt={category.name} />
            <div>
                <button>Black Friday</button>
            </div>
        </ContainerItem>
    );
}