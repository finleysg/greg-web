import { useState } from "react"

import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"

import { ErrorDisplay } from "../components/error-display"
import { SelectControl, SelectOption } from "../components/select-control"
import { TextareaControl } from "../components/textarea-control"
import { PhotoPicker } from "./photo-picker"

const PhotoUploadSchema = z.object({
  category: z.string().min(1, "Enter a category for this photo."),
  caption: z.string().nullish(),
})
export type PhotoUploadData = z.infer<typeof PhotoUploadSchema>

interface PhotoUploadFormProps {
  error?: Error | null
  onSubmit: (values: PhotoUploadData, file: File, successCallback?: () => void) => void
}

export function PhotoUploadForm({ onSubmit, error }: PhotoUploadFormProps) {
  const [files, setFiles] = useState<File[]>([])

  const form = useForm<PhotoUploadData>({
    resolver: zodResolver(PhotoUploadSchema),
    defaultValues: {
      category: "",
      caption: "",
    },
  })
  const { register, reset, handleSubmit, formState } = form
  const { errors: formErrors, isSubmitting } = formState

  const categoryOptions = [
    { name: "Additions and Garages", value: "additions" },
    { name: "Basements", value: "basements" },
    { name: "Bathrooms", value: "bathrooms" },
    { name: "Decks and Outdoor Spaces", value: "decks" },
    { name: "Kitchens", value: "kitchens" },
    { name: "Other Remodels", value: "other" },
  ] as SelectOption[]

  const handleFileSelected = (files: File[]) => {
    setFiles(files)
  }

  const handleFileSubmit = (values: PhotoUploadData) => {
    if (files.length === 0) {
      toast.error("Please select a photo to upload.")
      return
    }
    onSubmit(values, files[0], () => {
      reset()
      setFiles([])
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleFileSubmit)}>
        <PhotoPicker onSelect={handleFileSelected} />
        <SelectControl
          name="category"
          label="Category"
          register={register("category")}
          error={formErrors.category}
          options={categoryOptions}
        />
        <TextareaControl
          name="caption"
          label="Caption"
          register={register("caption")}
          error={formErrors.caption}
          rows={4}
        />
        <div className="d-flex justify-content-end">
          <button
            type="submit"
            className="text-base font-semibold text-white bg-primary py-4 px-8 hover:bg-opacity-80 mx-2 rounded-md transition duration-300 ease-in-out"
            disabled={files.length === 0 || isSubmitting}
          >
            Save
          </button>
        </div>
      </form>
      {error && <ErrorDisplay error={error.message} delay={10000} onClose={() => void 0} />}
    </div>
  )
}
