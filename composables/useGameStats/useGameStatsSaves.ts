import { useGameStatsStore } from '@/stores/game-stats'
import { tryParseItemFromLocalStorage } from '@/utils/json'
import { GameStats } from '@/types/Game'
import { pureGameStats } from '@/services/Tasks'

export function useGameStatsSaves() {
  return () => {
    const { setStats } = useGameStatsStore()

    const gameStatsFromLocalStorage: GameStats =
      tryParseItemFromLocalStorage('GameStats') || pureGameStats()

    setStats(gameStatsFromLocalStorage)
  }
}
