export const getProjectCategory = (title: string) => {
  if (title === "Decks and Outdoor Spaces") {
    return "decks"
  } else if (title === "Additions and Garages") {
    return "additions"
  } else if (title === "Other Remodels") {
    return "other"
  } else {
    return title.toLowerCase()
  }
}

export const getProjectTitle = (category: string) => {
  switch (category) {
    case "decks":
      return "Decks and Outdoor Spaces"
    case "additions":
      return "Additions and Garages"
    case "other":
      return "Other Remodels"
    case "bathrooms":
      return "Bathrooms"
    case "kitchens":
      return "Kitchens"
    case "basements":
      return "Basements"
    default:
      return category
  }
}
