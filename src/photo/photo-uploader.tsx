import { useState } from "react"

import { toast } from "react-toastify"

import { OverlaySpinner } from "../components/spinners/overlay-spinner"
import { useUploadPhoto } from "../hooks/use-photos"
import { PhotoUploadData, PhotoUploadForm } from "./photo-upload-form"

export function PhotoUploader() {
  const { mutate: savePhoto, status, error } = useUploadPhoto()
  const [photoKey, setPhotoKey] = useState(Date.now().toString())

  const handleSave = (values: PhotoUploadData, file: File, successCallback?: () => void) => {
    const form = new FormData()
    form.append("category", values.category ?? "")
    form.append("caption", values.caption ?? "")
    form.append("raw_image", file, file.name)

    savePhoto(form, {
      onSuccess: () => {
        toast.success("Your photo has been uploaded.")
        successCallback?.()
        setPhotoKey(Date.now().toString())
      },
    })
  }

  return (
    <div className="flex flex-wrap mx-[-16px]">
      <OverlaySpinner loading={status === "pending"} />
      <div className="w-full px-4">
        <div
          className="mx-auto max-w-[570px] text-center mb-[100px] wow fadeInUp"
          data-wow-delay=".1s"
        >
          <h2 className="text-black dark:text-white font-bold text-3xl sm:text-4xl md:text-[45px] mb-4">
            Upload a Photo
          </h2>
          <PhotoUploadForm key={photoKey} error={error} onSubmit={handleSave} />
        </div>
      </div>
    </div>
  )
}
