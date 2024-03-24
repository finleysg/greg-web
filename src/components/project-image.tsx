import { Photo } from "../models/photo"

interface ProjectImageProps {
  photo: Photo
}

export function ProjectImage({ photo }: ProjectImageProps) {
  return (
    <div className="m-4">
      <div className="w-full flex items-center justify-center rounded-md bg-primary bg-opacity-10 mb-5 text-primary">
        <picture>
          <source srcSet={photo.mobileImageUrl()} media="(max-width: 600px)" />
          <source srcSet={photo.webImageUrl()} media="(max-width: 1200px)" />
          <img src={photo.imageUrl()} alt={photo.caption} className="card-img-bottom" />
        </picture>
      </div>
      {photo.caption && (
        <p className="text-body-color text-base leading-relaxed font-medium pr-[10px]">
          {photo.caption}
        </p>
      )}
    </div>
  )
}
