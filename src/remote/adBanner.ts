import { COLLECTIONS } from '@/constants'
import { IAdBanner } from '@/models/card'
import { collection, getDocs } from 'firebase/firestore'
import { store } from '@/remote/firebase'

export const getAdBanners = async () => {
  const adBannerSnapshot = await getDocs(
    collection(store, COLLECTIONS.ADBANNER),
  )

  return adBannerSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as IAdBanner),
  }))
}
