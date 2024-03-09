import { ButtonColor, ButtonSize } from '@/styles/buttonStlyes'
import { Colors } from '@/styles/colorSet'
import { Typography } from '@/styles/typography'
import { CSSProperties, InputHTMLAttributes } from 'react'

/** 공통 컴포넌트 인터페이스 */
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

export interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  isError?: boolean
  helpMessage?: React.ReactNode
}

export interface IFlexProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
}

export interface IAlertProps {
  open?: boolean
  title: React.ReactNode
  description?: React.ReactNode
  buttonLabel?: string
  onButtonClick: () => void
}

export interface ITopProps {
  title: string
  subTitle: string
}

export interface IListRowProps {
  left?: React.ReactNode
  contents: React.ReactNode
  right?: React.ReactNode
  withArrow?: boolean
  onClick?: () => void
  as?: 'div' | 'li'
}

export interface IBadge {
  label: string
}

export interface ISpacingProps {
  size: number
  direction?: 'vertical' | 'horizontal'
}
