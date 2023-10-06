import { useGameStatsStore } from '@/stores/game-stats'
import { tryParseItemFromLocalStorage } from '@/utils/json'
import { GameStats } from '@/types/Game'
import { PureGameStats } from '@/services/Tasks/Tasks'

export function useGameStats() {
  const gameStatsStore = useGameStatsStore()

  const gameStatsFromLocalStorage: GameStats =
    tryParseItemFromLocalStorage('GameStats') || PureGameStats()

  gameStatsStore.setStats(gameStatsFromLocalStorage)
}
