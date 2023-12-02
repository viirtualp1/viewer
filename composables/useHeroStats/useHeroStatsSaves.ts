import { useHeroStatsStore } from '@/stores/hero-stats'
import { tryParseItemFromLocalStorage } from '@/utils/json'
import { pureHeroStats } from '@/services/Hero'
import { HeroStats } from '@/types/Hero'

export function useHeroStatsSaves() {
  function setHeroStatsSaves() {
    const { setStats } = useHeroStatsStore()

    const heroStatsFromLocalStorage: HeroStats =
      tryParseItemFromLocalStorage('HeroStats') || pureHeroStats()

    setStats(heroStatsFromLocalStorage)
  }

  return {
    setHeroStatsSaves,
  }
}
