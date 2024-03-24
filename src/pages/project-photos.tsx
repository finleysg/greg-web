import { MdZoomOutMap } from "react-icons/md"
import { Link, useNavigate, useParams } from "react-router-dom"

import { ProjectImage } from "../components/project-image"
import { SectionHeader } from "../components/section-header"
import { OverlaySpinner } from "../components/spinners/overlay-spinner"
import { usePhotos } from "../hooks/use-photos"
import { Photo } from "../models/photo"
import { getProjectTitle } from "../utils/project-utils"

export function ProjectPhotosPage() {
  const { category } = useParams()
  const { data, isLoading } = usePhotos(category ?? "")
  const title = getProjectTitle(category ?? "")
  const navigate = useNavigate()

  if (!category) {
    navigate("/")
  }

  return (
    <section id="project-photos" className="bg-primary bg-opacity-5 pt-[120px] pb-20">
      <div className="container">
        <SectionHeader title={title}>In progress and completed project photos.</SectionHeader>

        <div className="flex flex-wrap mx-[-16px] justify-center">
          <OverlaySpinner loading={isLoading} />
          {data?.map((photo: Photo) => {
            return (
              <div key={photo.id} className="w-full md:w-1/2 px-4">
                <div className="mb-[70px] wow fadeInUp" data-wow-delay=".1s">
                  <ProjectImage key={photo.id} photo={photo} />
                  <div className="text-center mt-0 mb-2">
                    <Link
                      to={`/projects/${photo.category}/${photo.id}`}
                      className="text-dark dark:text-white"
                    >
                      <MdZoomOutMap className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
