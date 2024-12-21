import { CountryEnumKey } from '../enums/index.js'

export const getCountry = (auth) => auth.user.Country
export const isCanada = (auth) => getCountry(auth) === CountryEnumKey.CA

// TODO refactor all uses of isOwner.
export const isOwner = (user) => user?.IsOwner || null
export const getUserEmail = (auth) => auth?.user?.Email || null
export const getUserId = (auth) => auth?.user?.Id || null
export const AuthProviders = ['apple', 'fb', 'google', 'email']
