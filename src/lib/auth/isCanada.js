import { CountryEnumKey } from '../enums'
import getCountry from './getCountry'

const isCanada = (auth) => getCountry(auth) === CountryEnumKey.CA

export { isCanada }

export default isCanada
