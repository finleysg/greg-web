import { useEffect, useState } from "react"

import { FileWithPath } from "react-dropzone"

import { FilePicker } from "./file-picker"

interface PhotoPickerProps {
  onSelect: (file: File[]) => void
}

interface FileWithPreview extends FileWithPath {
  preview: string
}

export function PhotoPicker({ onSelect }: PhotoPickerProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([])

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview)
        }
      })
    },
    [files],
  )

  const preview = (acceptedFiles: File[]) => {
    onSelect(acceptedFiles)
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    )
  }

  const thumbs = files.map((file) => (
    <div className="w-full p-1 mb-2 flex justify-center" key={file.name}>
      <div className="max-w-60 max-h-60 overflow-hidden">
        <img className="w-full h-full object-contain" src={file.preview} alt="preview" />
      </div>
    </div>
  ))

  return (
    <div>
      <FilePicker
        onSelected={preview}
        onDrop={preview}
        accept={{
          "image/gif": [".gif"],
          "image/jpeg": [".jpg", ".jpeg"],
          "image/png": [".png"],
          "image/webp": [".webp"],
        }}
      />
      <aside className="flex flex-row flex-wrap mt-4">{thumbs}</aside>
    </div>
  )
}
