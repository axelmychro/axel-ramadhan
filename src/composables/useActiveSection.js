import { ref } from 'vue'

export const activeSection = ref('#home')

export function setActiveSection(anchor) {
    activeSection.value = anchor
}
