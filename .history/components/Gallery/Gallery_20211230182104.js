import { GalleryItem } from "./GalleryItem"

export const Gallery = (props) => {
  console.log(props)
  return (
    <GalleryItem {...props}> </GalleryItem>
  )
}