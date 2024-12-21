const isOwner = (auth) => auth.user?.IsOwner || null

export { isOwner }

export default isOwner
