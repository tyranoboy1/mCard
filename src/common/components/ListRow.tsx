import Flex from '@/common/components/Flex'
import { css } from '@emotion/react'
import { IListRowProps } from '../interface/common.interface'
import Text from './Text'

const ListRow = (props: IListRowProps) => {
  const { left, contents, right, withArrow, onClick } = props
  return (
    <Flex as="li" css={listRowContainerStyles} onClick={onClick}>
      <Flex css={listRowLeftStyles}>{left}</Flex>
      <Flex css={listRowContentsStyles}>{contents}</Flex>
      <Flex>{right}</Flex>
      {withArrow ? <IconArrowRight /> : null}
    </Flex>
  )
}

/** 리스트 컴포넌트 스타일 */
const listRowContainerStyles = css`
  padding: 8px 24px;
`

const listRowLeftStyles = css`
  margin-right: 14px;
`
const listRowContentsStyles = css`
  flex: 1;
`

const ListRowTexts = ({
  title,
  subTitle,
}: {
  title: string
  subTitle: string
}) => {
  return (
    <Flex direction="column">
      <Text bold={true}>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}
/** 리스트 컴포넌트 화살표 svg */
const IconArrowRight = () => {
  return (
    <svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
    >
      <title />
      <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
    </svg>
  )
}

ListRow.Texts = ListRowTexts

export default ListRow
