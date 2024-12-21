export const getPhotos = (checklist) => {
  if (!checklist) {
    return []
  }

  const items = []

  for (const check of checklist) {
    if (check.ChecklistPages) {
      const pages = check.ChecklistPages || []
      if (!pages) {
        return []
      }

      const checkImages = pages.filter((p) => p.Type === 'IMAGE_UPLOAD').map((x) => x.ChecklistItems)
      checkImages.forEach((item) => {
        items.push(...item)
      })
    }
  }

  if (!items) {
    return []
  }

  return items.map((image) => {
    const result = {
      path: image.PhotoUrl,
      alt: '',
    }

    return result
  })
}
