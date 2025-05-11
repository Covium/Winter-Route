import { ref, watch } from 'vue'

export function updateDocumentMobileAttribute() {
  document.documentElement.setAttribute('mobile', isMobile.value.toString())
}

const isMobile = ref(false)

function updateMobileStatus() {
  const mobileUserAgents = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/
  const isMobileUserAgent = mobileUserAgents.test(navigator.userAgent)
  const isSmallScreen = window.innerWidth <= 450
  isMobile.value = isMobileUserAgent || isSmallScreen
}

updateMobileStatus()
updateDocumentMobileAttribute()

watch(isMobile, () => {
  updateDocumentMobileAttribute()
})
window.addEventListener('resize', updateMobileStatus)

export { isMobile }
