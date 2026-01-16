import { ref, onMounted, onUnmounted } from 'vue'

const showMenu = ref(false)

export function useMenuState() {
    let mediaQuery

    const handleChange = e => {
        if (e.matches) {
            showMenu.value = false
        }
    }

    onMounted(() => {
        mediaQuery = window.matchMedia('(min-width: 1024px)')
        mediaQuery.addEventListener('change', handleChange)

        if (mediaQuery.matches) {
            showMenu.value = false
        }
    })

    onUnmounted(() => {
        mediaQuery?.removeEventListener('change', handleChange)
    })

    return {
        showMenu,
    }
}
