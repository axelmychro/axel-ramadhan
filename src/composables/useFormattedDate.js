import { computed, unref } from 'vue'

export const useFormattedDate = (dateSource, options = {}) => {
    return computed(() => {
        const value = unref(dateSource)
        if (!value) return ''

        const date = new Date(value)
        if (isNaN(date.getTime())) return ''

        const formatOptions = {
            month: 'short',
            year: 'numeric',
        }

        if (!options.hideDay) {
            formatOptions.day = 'numeric'
        }

        return date.toLocaleDateString('en-US', formatOptions)
    })
}
