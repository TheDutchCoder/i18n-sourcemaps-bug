/** @deprecated use useAbsoluteRvUrl instead */
export default function ({ $config, localePath }, slug, query) {
  const path = {
    name: 'rv-rental',
    params: { alias: slug },
    query,
  }

  const url = $config.baseURL
  return `${url}${localePath(path)}`
}
