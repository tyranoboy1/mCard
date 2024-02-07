import { ButtonColor, ButtonSize } from '@/styles/buttonStlyes'
import { Colors } from '@/styles/colorSet'
import { Typography } from '@/styles/typography'
import { CSSProperties } from 'react'

export interface ITextProps {
  typography?: Typography
  color?: Colors
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontWeight?: CSSProperties['fontWeight']
  bold?: boolean
}

export interface IButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  weak?: boolean
  full?: boolean
  disabled?: boolean
}
