import { HeroData } from '@/services/Hero'

export function useHeroesApi() {
  function getHeroName(hero: HeroData | null) {
    return hero?.localized_name || ''
  }

  return {
    getHeroName,
  }
}
