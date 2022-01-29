import { ContainerProduct, Category, SizeButton, ButtonWrapper, SelectSizeTitle, SelectColorTitle, ColorWrapper, ButtonCard } from "./ShowCaseItem.styled";
import { Gallery } from "../Gallery/Gallery";
import { ButtonColors } from "../ButtonColors/ButtonColors";
import CategoriesServices from '../../services/categories.service'
import { useEffect, useState } from "react"
import { AdminPanel } from "../AdminPanel/AdminPanel";
import { ButtonSize } from "../ButtonSize/ButtonSize";
ButtonCard


export default function ShowCaseItem({ name, beloning, size, price, description, photos, colors }) {

    const [category, setCategory] = useState([])
    const [show, setShow] = useState(false)
    const [imageShow, setImageShow] = useState()

    const [imageToShow, setImageToShow] = useState(images[0])
    const [lightboxDisplay, setLightBoxDisplay] = useState(false)

    const images = photos?.map((itemall) => itemall.url)

    let categoryService = new CategoriesServices()

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {

        await categoryService
            .getCategoryById(beloning?.idCategory)
            .then((data) => {
                setCategory(data?.data)
            })
            .catch((err) => {
                console.log(err)
            }
            )
    }
    console.log(images)

    const showImage = (url) => {
        setImageToShow(url);
        setLightBoxDisplay(true)
    }

    const hideLightBox = () => {
        setLightBoxDisplay(false)
    }


    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = images.indexOf(imageToShow)
        if (currentIndex >= images.length - 1) {
            let loopsimg = props.photos.length - 1;
            let nextImage = images[currentIndex - loopsimg];
            setImageToShow(nextImage);
            //setLightBoxDisplay(false);
        } else {
            let nextImage = images[currentIndex + 1];
            setImageToShow(nextImage);
        }
    }

    const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = images.indexOf(imageToShow);
        if (currentIndex <= 0) {
            let loopsimg = props.photos.length - 1;
            let nextImage = images[currentIndex + loopsimg];
            setImageToShow(nextImage);
            // setLightBoxDisplay(false);
        } else {
            let nextImage = images[currentIndex - 1];
            setImageToShow(nextImage);
        }
    };

    return (
        <>
            <ContainerProduct>
                {
                    category ? (
                        <>
                            <div>
                                <Category >{category.name}<br /> {name} </Category>
                            </div>

                            <Gallery img={imageToShow} showImage={showImage} photos={photos} isActive={imageShow} getFirstColor={colors[0]} />

                            <div>
                                {/* <SelectSizeTitle>SELECT  SIZE</SelectSizeTitle> */}
                                {/* <ButtonWrapper>
                                <ButtonSize buttons={size} ></ButtonSize>
                            </ButtonWrapper> */}
                                <ButtonSize buttons={size} />
                                <ButtonColors
                                    palitrs={colors}
                                    showImage={showImage}
                                />
                            </div>
                        </>
                    ) : <p>Loading....</p>
                }
            </ContainerProduct>
        </>
    )
}
