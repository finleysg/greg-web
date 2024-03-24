import { z } from "zod"

import { serverBaseUrl } from "../utils/app-config"

export const PhotoApiSchema = z.object({
  id: z.number(),
  caption: z.string().nullish(),
  category: z.string().nullish(),
  mobile_url: z.string(),
  web_url: z.string(),
  image_url: z.string(),
  raw_image: z.string(),
  created_by: z.string(),
  last_update: z.coerce.date(),
})

export type PhotoData = z.infer<typeof PhotoApiSchema>

export class Photo {
  id: number
  caption: string | undefined
  category: string | undefined
  rawMobileUrl: string
  rawWebUrl: string
  rawImageUrl: string
  createdBy: string
  lastUpdate: Date

  constructor(data: PhotoData) {
    this.id = data.id
    this.caption = data.caption ?? ""
    this.category = data.category ?? ""
    this.rawMobileUrl = data.mobile_url
    this.rawWebUrl = data.web_url
    this.rawImageUrl = data.image_url
    this.createdBy = data.created_by
    this.lastUpdate = data.last_update
  }

  static getPagedPhotosUrl(category: string) {
    if (category) {
      return `photos/?page=1&category=${category}`
    } else {
      return "photos/?page=1"
    }
  }

  imageUrl() {
    if (this.rawImageUrl.startsWith("http")) {
      return this.rawImageUrl // production (from Amazon storage)
    }
    return `${serverBaseUrl}${this.rawImageUrl}`
  }

  webImageUrl() {
    if (this.rawWebUrl.startsWith("http")) {
      return this.rawWebUrl // production (from Amazon storage)
    }
    return `${serverBaseUrl}${this.rawWebUrl}`
  }

  mobileImageUrl() {
    if (this.rawMobileUrl.startsWith("http")) {
      return this.rawMobileUrl // production (from Amazon storage)
    }
    return `${serverBaseUrl}${this.rawMobileUrl}`
  }
}
