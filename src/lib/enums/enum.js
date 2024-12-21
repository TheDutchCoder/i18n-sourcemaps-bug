export default class Enum {
  static $getKeyByValue(value) {
    const sourceType = typeof value

    return this.$allKeys().find((x) => {
      const thisType = typeof this[x]

      if (thisType === sourceType) {
        return this[x] === value
      }
      if (thisType === 'number' && sourceType === 'string') {
        return this[x] === Number(value)
      }
      if (thisType === 'string' && sourceType === 'number') {
        return this[x] === String(value)
      }

      return false
    })
  }

  static $allKeys() {
    return Object.keys(this)
  }

  static $allValues() {
    return Object.values(this)
  }

  static $all() {
    return Object.keys(this).reduce((map, key) => {
      map[key] = this[key]
      return map
    }, {})
  }

  static toJSON() {
    return this.$all()
  }
}
