import styled from '@emotion/styled'
import { ISpacingProps } from '../interface/common.interface'

const Spacing = styled.div<ISpacingProps>`
  ${({ size, direction = 'vertical' }) =>
    direction === 'vertical' ? `height:${size}px;` : `width: ${size}px`}
`

export default Spacing
