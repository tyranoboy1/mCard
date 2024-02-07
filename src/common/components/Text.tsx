import styled from '@emotion/styled'

import { colors } from '@/styles/colorSet'
import { typographyMap } from '@/styles/typography'
import { ITextProps } from '@/common/interface/common.interface'

/** 글자(텍스트) 공통 컴포넌트 */
const Text = styled.span<ITextProps>(
  ({ color = 'black', display, textAlign, fontWeight, bold }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight,
  }),
  ({ typography = 't5' }) => typographyMap[typography],
)

export default Text
