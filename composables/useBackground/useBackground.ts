import { useMainStore } from '@/stores/main'

import DefaultBackgroundImage from '@/assets/images/backgrounds/default.jpg'
import ForestBackgroundImage from '@/assets/images/backgrounds/forest.jpg'
import MorningBackgroundImage from '@/assets/images/backgrounds/morning.jpg'
import NeonBackgroundImage from '@/assets/images/backgrounds/neon.jpg'
import NightBackgroundImage from '@/assets/images/backgrounds/night.jpg'
import NightCyberpunkBackgroundImage from '@/assets/images/backgrounds/night-cyberpunk.jpg'
import OlenBackgroundImage from '@/assets/images/backgrounds/olen.jpg'

const backgrounds = [
  DefaultBackgroundImage,
  ForestBackgroundImage,
  MorningBackgroundImage,
  NeonBackgroundImage,
  NightBackgroundImage,
  NightCyberpunkBackgroundImage,
  OlenBackgroundImage,
]

export function useBackground() {
  const { setBackgroundImageIndex } = useMainStore()

  const appStyles = ref('')

  onMounted(() => {
    const backgroundIndexFromLocalStorage =
      Number(localStorage.getItem('backgroundIndex')) || 0

    setBackgroundImageIndex(backgroundIndexFromLocalStorage)

    const backgroundImage = backgrounds[backgroundIndexFromLocalStorage]

    appStyles.value = `
      background: url(${backgroundImage});
      background-size: cover;
    `
  })

  return {
    appStyles,
  }
}
