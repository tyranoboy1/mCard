import { css } from '@emotion/react'
import { ITopProps } from '@/common/interface/common.interface'
import Flex from '@/common/components/Flex'
import Text from '@/common/components/Text'

const Top = ({ title, subTitle }: ITopProps) => {
  return (
    <Flex direction="column" css={containerStyles}>
      <Text bold={true} typography="t4">
        {title}
      </Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}

export default Top

const containerStyles = css`
  padding: 24px;
`
