export type HeroPrimaryAttr = 'str' | 'agi' | 'int' | 'all'

export type HeroAttackType = 'Melee' | 'Ranged'

export type HeroRole =
  | 'Carry'
  | 'Escape'
  | 'Nuker'
  | 'Initiator'
  | 'Durable'
  | 'Disabled'
  | 'Support'

export interface HeroData {
  id: number
  name: string
  localized_name: string
  primary_attr: HeroPrimaryAttr
  attack_type: HeroAttackType
  roles: HeroRole
  legs: number
}

export const pureHeroStats = () => {
  return {
    hp: 100,
    energy: 100,
    food: 100,
    water: 100,
  }
}
