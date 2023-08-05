import { useHeroStatsStore } from "@/stores/hero-stats";
import { tryParseItemFromLocalStorage } from "@/utils/json";
import { PureHeroStats } from "@/services/Hero";
import { HeroStats } from "@/types/Hero";

export function useHeroStats() {
  const heroStatsStore = useHeroStatsStore();

  const heroStatsFromLocalStorage: HeroStats =
    tryParseItemFromLocalStorage("HeroStats") || PureHeroStats();

  heroStatsStore.setStats(heroStatsFromLocalStorage);
}
