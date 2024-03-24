import { PhotoUploader } from "../photo/photo-uploader"

export function UploadPhotoPage() {
  return (
    <section className="relative overflow-hidden z-10 pt-[80px] pb-[120px]">
      <div className="container">
        <PhotoUploader />
      </div>
    </section>
  )
}
