import { GalleryImage } from "../components/gallery-image"
import { SectionHeader } from "../components/section-header"

export function Gallery() {
  return (
    <section id="gallery" className="bg-primary bg-opacity-[3%] pt-[120px] pb-[50px]">
      <div className="container">
        <SectionHeader title="Gallery">
          There are many variations of passages of Lorem Ipsum available but the majority have
          suffered alteration in some form.
        </SectionHeader>
        <div className="flex flex-wrap mx-[-16px]">
          <GalleryImage
            title="Bathrooms"
            imageSrc="/src/assets/baths.jpg"
            altText="Bathroom Remodel"
          >
            Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam
            numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.
          </GalleryImage>
          <GalleryImage
            title="Kitchens"
            imageSrc="/src/assets/kitchens.jpg"
            altText="Kitchen Remodel"
          >
            Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam
            numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.
          </GalleryImage>
          <GalleryImage
            title="Basements"
            imageSrc="/src/assets/basements.jpg"
            altText="Finish Your Basement"
          >
            Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam
            numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.
          </GalleryImage>
          <GalleryImage
            title="Decks and Outdoor Spaces"
            imageSrc="/src/assets/decks.jpg"
            altText="Replace Your Deck"
          >
            Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam
            numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.
          </GalleryImage>
          <GalleryImage
            title="Other Remodels"
            imageSrc="/src/assets/other-remodels.jpg"
            altText="New Mud Room"
          >
            Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam
            numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.
          </GalleryImage>
          <GalleryImage
            title="Additions and Garages"
            imageSrc="/src/assets/outdoors.jpg"
            altText="Fence Replacement"
          >
            Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam
            numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.
          </GalleryImage>
        </div>
      </div>
    </section>
  )
}
