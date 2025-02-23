import http from '@/services/axios'
import { HeroData } from '@/services/Hero'

export function getHeroes(): Promise<HeroData[]> {
  return http.get('/heroes').then((res) => res.data)
}
