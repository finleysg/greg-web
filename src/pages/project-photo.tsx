import { TiArrowBack } from "react-icons/ti"
import { useNavigate, useParams } from "react-router-dom"

import { ProjectImage } from "../components/project-image"
import { OverlaySpinner } from "../components/spinners/overlay-spinner"
import { usePhoto } from "../hooks/use-photos"

export function ProjectPhotoPage() {
  const { category: _, id } = useParams()
  const { data: photo, isLoading } = usePhoto(id ?? "")
  const navigate = useNavigate()

  if (!id) {
    navigate("/")
  }

  return (
    <section id="project-photos" className="bg-primary bg-opacity-5 pt-[120px] pb-20">
      <div className="container">
        <div className="flex flex-wrap mx-[-16px] justify-center">
          <OverlaySpinner loading={isLoading} />
          {photo && (
            <div>
              <button
                onClick={() => navigate(-1)}
                className="mt-0 mb-4 ms-4 border-0 bg-transparent text-dark dark:text-white"
              >
                <TiArrowBack className="h-6 w-6 cursor-pointer" />
              </button>
              <ProjectImage key={photo.id} photo={photo} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
