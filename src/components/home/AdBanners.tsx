import { getAdBanners } from '@/remote/adBanner'
import { colors } from '@/styles/colorSet'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Flex from '@/common/components/Flex'
import Text from '@/common/components/Text'

/** 배너 컴포넌트 */
const AdBanners = () => {
  /** useQuery를 통해 데이터 가져오기 */
  /** 첫번째는 키값, 두번째는 fetch 함수 */
  const { data } = useQuery(['adBanners'], () => getAdBanners())

  return (
    <Container>
      <Swiper spaceBetween={8}>
        {data?.map((item) => {
          return (
            <SwiperSlide>
              <Link to={item.link}>
                <Flex direction="column" css={bannerContainerStyles}>
                  <Text bold={true}>{item.title}</Text>
                  <Text typography="t7">{item.description}</Text>
                </Flex>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

const bannerContainerStyles = css`
  padding: 16px;
  background-color: ${colors.grey};
  border-radius: 4px;
`

const Container = styled.div`
  padding: 24px;
`
export default AdBanners
