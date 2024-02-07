import styled from '@emotion/styled'
import { IButtonProps } from '@common/interface/common.interface'
import {
  buttonColorMap,
  buttonSizeMap,
  buttonWeakMap,
} from '@/styles/buttonStlyes'
import { css } from '@emotion/react'

/** 버튼 공통 컴포넌트 */
const Button = styled.button<IButtonProps>(
  {
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '6px',
  },
  ({ color = 'primary', weak }) =>
    weak ? buttonWeakMap[color] : buttonColorMap[color],
  ({ size = 'small' }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: 'block';
          width: 100%;
          border-radius: 0;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.26;
          cursor: initial;
        `
      : undefined,
)

export default Button
