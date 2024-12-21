import regionsCA from '~/assets/data/provinces.json'
import regionsUS from '~/assets/data/states.json'

/**
 * @typedef region
 * @property {string} name - The region name
 * @property {string} slug - The region slug
 * @property {string} lat - The region's center latitude
 * @property {string} lng - The region's center longitude
 * */

/**
 * @type {{regions: Object.<string, region>}}
 * */

/**
 * @typedef country
 * @property {number} id - The country ID
 * @property {string} name - The country name
 * @property {string} slug - The country slug
 * @property {string} code - The country code
 * @property {regions} regions - The list of regions (states or provinces) in the country
 * */

const Canada = {
  id: 1,
  name: 'canada',
  slug: 'canada',
  code: 'CA',
  regions: regionsCA,
}

const USA = {
  id: 2,
  name: 'usa',
  slug: 'usa',
  code: 'US',
  regions: regionsUS,
}

class Countries {
  constructor() {
    this.countries = [Canada, USA]
  }

  /**
   * @type Array<country>
   **/
  get entries() {
    return this.countries
  }

  /**
   * @type Array<string>
   **/
  get names() {
    return this.countries.map((c) => c.name)
  }

  /**
   * @return {country} The country that has the informed code.
   **/
  getByCode(code) {
    code = code?.toLowerCase()
    return this.countries.find((c) => c.code.toLowerCase() === code)
  }

  /**
   * @return {country} The country that has the informed name.
   **/
  getByName(name) {
    name = name?.toLowerCase()
    return this.countries.find((c) => c.name.toLowerCase() === name)
  }

  /**
   *
   * @return {country} The country that has the informed regionCode.
   **/
  getByRegionCode(regionCode) {
    regionCode = regionCode?.toUpperCase()
    return this.countries.find((c) => c.regions[regionCode])
  }

  /**
   *
   * @return {country} The country that has the informed region slug.
   **/
  getByRegionSlug(slug) {
    return this.countries.find((c) => Object.keys(c.regions).find((key) => c.regions[key].slug === slug))
  }
}

export const countries = new Countries()
