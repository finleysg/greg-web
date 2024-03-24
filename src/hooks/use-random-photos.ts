import { useQuery } from "@tanstack/react-query"

import { Photo, PhotoApiSchema } from "../models/photo"
import { getMany } from "../utils/api-client"

export function useRandomPhotos(take: number, category: string | undefined) {
  const getUrl = () => {
    if (category) {
      return `random-photos/?take=${take}&category=${category}`
    } else {
      return `random-photos/?take=${take}`
    }
  }
  const url = getUrl()

  return useQuery({
    queryKey: ["random-photos", category ?? "none"],
    queryFn: () => getMany(url, PhotoApiSchema),
    select: (data) => data.map((p) => new Photo(p)),
  })
}
