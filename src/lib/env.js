// since env variables -should- always be strings we need to choose which text values should be consider truthy
export const isTrue = (v) => ['1', 'true', 't', 'yes', 'y', 'on'].includes(v?.toString()?.toLowerCase())
export const isDev = () => isTrue(process.env.NODE_ENV === 'development')
