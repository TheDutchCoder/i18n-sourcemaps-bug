export default class {
  #client
  #config
  #captureError
  #appClient = true
  #autoDisconnect

  constructor({ $client, $config, $captureError }) {
    this.#client = $client
    this.#config = $config
    this.#captureError = $captureError ?? (() => {})

    this.#initialize()
  }

  get client() {
    return this.#client
  }

  get appClient() {
    return this.#appClient
  }

  #initialize() {
    this.client.on('error', (err) => this.#captureError(err))

    this.client.on('reconnecting', () => {
      // strangely this is needed to allow reconnects to happen
    })
  }

  #setAutoDisconnect() {
    if (this.#autoDisconnect) {
      clearTimeout(this.#autoDisconnect)
    }
    this.#autoDisconnect = setTimeout(() => {
      this.#autoDisconnect = undefined
      try {
        this.disconnect()
      }
      catch (err) {
        this.#captureError(err)
      }
    }, this.#config.PluginTimeout)
  }

  async #connect() {
    this.#setAutoDisconnect()
    if (this.client.isOpen && this.client.isReady) {
      return
    }

    try {
      await this.client.connect()
    }
    catch (err) {
      if (!['Socket already opened'].includes(err?.message)) {
        this.#captureError(err)
      }
    }
  }

  #key(key) {
    return `${this.#config.KeyPrefix}${key}`
  }

  async get({ key, deserializeCallback = (v) => JSON.parse(v) }) {
    try {
      await this.#connect()
      const result = await this.client.get(this.#key(key))
      if (result) {
        return deserializeCallback(result)
      }
    }
    catch (err) {
      this.#captureError(err)
    }
  }

  async set({ key, data, options, serializeCallback = (v) => JSON.stringify(v) }) {
    if (this.#config.CacheAge > 0 && !options?.EX && !options?.PX && !options?.EXAT && !options?.PXAT) {
      if (!options) {
        options = {}
      }
      options.EX = this.#config.CacheAge
    }
    try {
      await this.#connect()
      return await this.client.set(this.#key(key), serializeCallback(data), options)
    }
    catch (err) {
      this.#captureError(err)
    }
  }

  async disconnect() {
    try {
      if (this.client.isOpen) {
        if (this.client.isReady) {
          await this.client.disconnect()
        }
        else {
          await this.client.quit()
        }
      }
    }
    catch (err) {
      this.#captureError(err)
      return false
    }

    return true
  }
}
