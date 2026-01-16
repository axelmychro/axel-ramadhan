import { computed } from 'vue'

export function useResolvedLink(link) {
  return computed(() => {
    if (!link) return null

    if (link.anchor) {
      return {
        type: 'anchor',
        isInternal: false,
        to: link.anchor,
      }
    }

    if (!link.to) return null

    const isExternal = link.to.startsWith('http')
    const isInternal = link.to.startsWith('/') && !isExternal

    return {
      type: isExternal ? 'external' : 'internal',
      isInternal,
      isExternal,
      to: link.to,
    }
  })
}
