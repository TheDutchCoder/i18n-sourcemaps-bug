import { GrammarBitsEnum } from '../enums/index.js'

export default class {
  #rules

  constructor(rules = 0) {
    this.#rules = rules ?? 0
  }

  get rules() {
    return this.#rules
  }

  set rules(value) {
    this.#rules = value
  }

  #isBitSet(bit) {
    return (this.rules & bit) > 0
  }

  #setBit(bit, on) {
    if (on) this.rules |= bit
    else this.rules &= bit
  }

  get isMasculine() {
    return this.#isBitSet(GrammarBitsEnum.IsMasculine)
  }

  set isMasculine(value) {
    this.#setBit(GrammarBitsEnum.IsMasculine, value)
  }

  get isFeminine() {
    return this.#isBitSet(GrammarBitsEnum.IsFeminine)
  }

  set isFeminine(value) {
    this.#setBit(GrammarBitsEnum.IsFeminine, value)
  }

  get isIsland() {
    return this.#isBitSet(GrammarBitsEnum.IsIsland)
  }

  set isIsland(value) {
    this.#setBit(GrammarBitsEnum.IsIsland, value)
  }

  get isPluralized() {
    return this.#isBitSet(GrammarBitsEnum.IsPluralized)
  }

  set isPluralized(value) {
    this.#setBit(GrammarBitsEnum.IsPluralized, value)
  }
}
