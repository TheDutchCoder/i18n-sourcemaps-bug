const convertToElement = (content) => {
  if (typeof content === 'object') {
    return content
  }

  const html = document.createElement('html')
  html.innerHTML = content

  return html
}

export const openLinksInNewWindow = ({ content, currentPath, target = '_blank', overwriteTarget = false }) => {
  const html = convertToElement(content)
  if (!html) {
    return
  }

  const links = [...html.getElementsByTagName('a')]

  links
    .filter((link) => (overwriteTarget ? link : !link.target))
    .forEach((link) => {
      if (link.pathname !== currentPath) {
        link.target = target
      }
    })

  return html.innerHTML
}

export const removeTags = ({ content, tags = [] }) => {
  const html = convertToElement(content)
  if (!html) {
    return
  }

  tags.forEach((tag) => [...html.getElementsByTagName(tag)].forEach((el) => el.remove()))

  return html.innerHTML
}
