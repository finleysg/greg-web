import decks from "../assets/deck-before-dusk.jpg"
import basements from "../assets/finished-basement.jpg"
import kitchens from "../assets/kitchen-web.jpg"
import otherRemodels from "../assets/other-remodels.jpg"
import outdoors from "../assets/porch-web.jpg"
import baths from "../assets/upper-bath-vanity.jpg"
import { GalleryImage } from "../components/gallery-image"
import { SectionHeader } from "../components/section-header"

export function Gallery() {
  return (
    <section id="gallery" className="bg-primary bg-opacity-[3%] pt-[120px] pb-[50px]">
      <div className="container">
        <SectionHeader title="Gallery">
          Take a look at some of our in-progress and finished photos. We take pride in our work and
          want to show you what we can do. If you have any questions or would like to see more,
          please contact us.
        </SectionHeader>
        <div className="flex flex-wrap mx-[-16px]">
          <GalleryImage title="Bathrooms" imageSrc={baths} altText="Bathroom Remodel">
            Living with an outdated bathroom? Give your bathroom a fresh new look with your own
            style and flair. We can help you design and build the bathroom of your dreams.
          </GalleryImage>
          <GalleryImage title="Kitchens" imageSrc={kitchens} altText="Kitchen Remodel">
            Kitchens have become centerpieces of the modern home. Make your kitchen a place you love
            and a gathering place for your family and friends.
          </GalleryImage>
          <GalleryImage title="Other Remodels" imageSrc={otherRemodels} altText="New Mud Room">
            When it comes to improving your home, we have the experience and versatility to do
            almost anything you can imagine. If you have a project in mind, Let's make it a reality.
          </GalleryImage>
          <GalleryImage
            title="Decks and Outdoor Spaces"
            imageSrc={decks}
            altText="Replace Your Deck"
          >
            Turn your old deck into a special outdoor space with our help.
          </GalleryImage>
          <GalleryImage title="Basements" imageSrc={basements} altText="Finish Your Basement">
            Add extra living space to your home by finishing your basement. We can help you create a
            warm and dry space for your family to enjoy.
          </GalleryImage>
          <GalleryImage
            title="Additions and Garages"
            imageSrc={outdoors}
            altText="Fence Replacement"
          >
            Need help adding a garage, shed or other outbuilding? Give us a call.
          </GalleryImage>
        </div>
      </div>
    </section>
  )
}
