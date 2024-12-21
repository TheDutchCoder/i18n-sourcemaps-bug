export function scrollToAnchors({ offset = 220, behavior = 'smooth' } = {}) {
  // THIS FUNCTION WORKS ONLY IN THE BROWSER AND HAS TO BE BINDED TO A VUE COMPONENT
  if (!this.$route.hash) {
    return
  }

  const hash = String(this.$route.hash).replace('#', '')
  if (!hash) {
    return
  }

  const el = this.$refs[hash].$el ?? this.$refs[hash]
  if (!el) {
    return
  }

  this.$nextTick(() => {
    const position = el.offsetTop
    if (position <= 0) {
      return
    }
    window.scrollTo({ top: position + offset, left: 0, behavior })
  })
}
