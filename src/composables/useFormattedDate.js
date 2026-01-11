import { computed, unref } from 'vue'

export const useFormattedDate = dateSource => {
  return computed(() => {
    const value = unref(dateSource)

    if (!value) return ''

    const date = new Date(value)

    if (isNaN(date.getTime())) return ''

    return date.toLocaleDateString('en-SG', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  })
}
