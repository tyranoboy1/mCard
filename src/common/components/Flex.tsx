import styled from '@emotion/styled'
import { IFlexProps } from '@/common/interface/common.interface'

const Flex = styled.div<IFlexProps>(({ align, justify, direction }) => ({
  display: 'flex',
  alignItems: align,
  justifyContent: justify,
  flexDirection: direction,
}))

export default Flex
