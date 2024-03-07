import { COLLECTIONS } from '@/constants'
import { ICard } from '@/models/card'
import {
  collection,
  getDocs,
  limit,
  query,
  QuerySnapshot,
  startAfter,
} from 'firebase/firestore'
import { store } from './firebase'

/** 카드 데이터를 얻어오는 함수 */
/** pageParam 지금 보이고 있는 맨 마지막 요소 */
//TODO 데이터 초기 개수가 적으면 스크롤 안됌 이슈
export const getCards = async (pageParam?: QuerySnapshot<ICard>) => {
  const cardQuery =
    pageParam == null
      ? query(collection(store, COLLECTIONS.CARD), limit(10))
      : query(
          collection(store, COLLECTIONS.CARD),
          startAfter(pageParam),
          limit(1),
        )
  const cardSnapshot = await getDocs(cardQuery)

  const lastVisible = cardSnapshot.docs[cardSnapshot.docs.length - 1]

  const items = cardSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as ICard),
  }))

  return { items, lastVisible }
}
