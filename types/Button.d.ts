export type ButtonTheme = 'primary' | 'success' | 'danger' | 'warning'

export type Size = 'small' | 'default' | 'large'

export interface ButtonProps {
  theme?: ButtonTheme
  outlined?: boolean
  size?: Size
}
