export function createFileInterface({
  id,
  uploaderId,
  s3ObjectKey,
  name,
  size,
  progress,
  thumbnail,
  original,
  replaceFile,
}) {
  return {
    id,
    uploaderId,
    s3ObjectKey,
    name,
    size: size ? (size / (1024 * 1024)).toFixed(2) : undefined, // bytes to megabytes,
    progress: progress === undefined ? 100 : progress,
    thumbnail,
    original,
    replaceFile,
  }
}

export function replaceFileOnFiles(files, fileToReplace, fileToAdd) {
  files.splice(
    files.findIndex((file) => file === fileToReplace),
    1,
    fileToAdd,
  )
}
