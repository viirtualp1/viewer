import { useHeroStatsStore } from '@/stores/hero-stats'
import { tryParseItemFromLocalStorage } from '@/utils/json'
import { pureHeroStats } from '@/services/Hero'
import { HeroStats } from '@/types/Hero'

export function useHeroStatsSaves() {
  return () => {
    const { setStats } = useHeroStatsStore()

    const heroStatsFromLocalStorage: HeroStats =
      tryParseItemFromLocalStorage('HeroStats') || pureHeroStats()

    setStats(heroStatsFromLocalStorage)
  }
}
