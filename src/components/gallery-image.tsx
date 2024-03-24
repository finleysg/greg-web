import { PropsWithChildren } from "react"

import { Link } from "react-router-dom"

import { getProjectCategory } from "../utils/project-utils"

interface GalleryImageProps {
  title: string
  imageSrc: string
  altText: string
}

export function GalleryImage(props: PropsWithChildren<GalleryImageProps>) {
  const { title, imageSrc, altText, children } = props

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="mb-[70px] wow fadeInUp" data-wow-delay=".1s">
        <div className="w-full flex items-center justify-center rounded-md bg-primary bg-opacity-10 mb-10 text-primary">
          <Link to={`/projects/${getProjectCategory(title)}`}>
            <img src={imageSrc} alt={altText} />
          </Link>
        </div>
        <h3 className="font-bold text-black dark:text-white text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-5">
          {title}
        </h3>
        <p className="text-body-color text-base leading-relaxed font-medium pr-[10px]">
          {children}
        </p>
        <p className="text-black dark:text-white leading-relaxed font-medium pr-[10px]">
          <Link to={`/projects/${getProjectCategory(title)}`}>(see more...)</Link>
        </p>
      </div>
    </div>
  )
}
