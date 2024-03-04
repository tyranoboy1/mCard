import Top from '@/common/components/Top'
import { getAdBanners } from '@/remote/adBanner'
import { getCards } from '@/remote/card'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    getCards().then((res) => {
      console.log('res', res)
    })
    getAdBanners().then((res) => {
      console.log('res', res)
    })
  }, [])
  return (
    <div>
      <Top title="혜택 좋은 카드" subTitle="회원님을 위해서 좋은 카드" />
    </div>
  )
}

export default Home
