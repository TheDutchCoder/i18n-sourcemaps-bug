export const bytesToMegabytes = (bytes) => {
  return Number(bytes / 1024 / 1024).toFixed(1)
}

export const bytesToSize = (bytes) => {
  const sizes = ['Bytes', 'kb', 'mb', 'gb', 'tb']
  if (bytes === 0) {
    return '0 Byte'
  }
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  return Math.round(bytes / Math.pow(1024, i), 2) + sizes[i]
}

export const truncateImageName = (name, limit = 10) => {
  const extension = `.${name.split('.').pop()}`
  const noExtension = name.replace(extension, '')

  if (noExtension.length > limit) {
    return `${noExtension.slice(0, limit)}..${extension}`
  }

  return name
}
