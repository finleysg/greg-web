import { useMutation, useQuery } from "@tanstack/react-query"

import { Photo, PhotoApiSchema } from "../models/photo"
import { getMany, getOne, httpClient } from "../utils/api-client"
import { apiUrl } from "../utils/api-utils"

export function usePhoto(id: string) {
  const endpoint = `photos/${id}/`
  return useQuery({
    queryKey: [endpoint],
    queryFn: () => getOne(endpoint, PhotoApiSchema),
    select: (data) => (data ? new Photo(data) : null),
  })
}

export function usePhotos(category: string) {
  const endpoint = `photos/?category=${category}`
  return useQuery({
    queryKey: [endpoint],
    queryFn: () => getMany(endpoint, PhotoApiSchema),
    select: (data) => {
      if (data) {
        return data.map((photo) => new Photo(photo))
      }
    },
  })
}

export function useUploadPhoto() {
  return useMutation({
    mutationFn: (formData: FormData) => httpClient(apiUrl(`photos/`), { body: formData }),
  })
}
