import ListRow from '@/common/components/ListRow'
import Top from '@/common/components/Top'
import { getCard } from '@/remote/card'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

const CardPage = () => {
  const { id = '' } = useParams()
  /** 카드와 id값을 묶어서 캐시키를 만든다. */
  /** enabled 를 통해 데이터를 호출할지 안할지 정할수 있다. */
  const { data } = useQuery(['card', id], () => getCard(id), {
    enabled: id !== '',
  })
  if (!data) {
    return null
  }

  const subTitle = data.promotion
    ? removeHtmlTag(data.promotion.title)
    : data.tags.join(', ')

  return (
    <div>
      <Top title={`${data.corpName} ${data.name}`} subTitle={subTitle} />
      <ul>
        {data.benefit.map((item, index) => {
          return (
            <ListRow
              key={item}
              left={<IconCheck />}
              contents={
                <ListRow.Texts title={`혜택 ${index + 1}`} subTitle={item} />
              }
            />
          )
        })}
        `
      </ul>
    </div>
  )
}

/** 정규식을 사용하여 html 태그 제거 */
const removeHtmlTag = (text: string) => {
  return text.replace(/<[^>]*>/g, '')
}

const IconCheck = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
    >
      <path
        d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        fill="#6563ff"
      />
    </svg>
  )
}
export default CardPage
