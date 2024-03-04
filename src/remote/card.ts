import { COLLECTIONS } from '@/constants'
import { IAdBanner } from '@/models/card'
import { collection, getDocs } from 'firebase/firestore'
import { store } from './firebase'

/** 카드 데이터를 얻어오는 함수 */
export const getCards = async () => {
  const cardSnapshot = await getDocs(collection(store, COLLECTIONS.CARD))

  return cardSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as IAdBanner),
  }))
}
