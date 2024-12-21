export class MapMarker {
  #id
  #title
  #subtitle
  #photos

  constructor({ id, title, subtitle, photos }) {
    this.#id = id
    this.#title = title
    this.#subtitle = subtitle
    this.#photos = photos
  }

  get id() {
    return this.#id
  }

  get title() {
    return this.#title
  }

  get subtitle() {
    return this.#subtitle
  }

  get photos() {
    return this.#photos
  }
}
