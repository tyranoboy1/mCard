import { COLLECTIONS } from '@/constants'
import { adBanners } from '@/mock/data'

import { store } from '@/remote/firebase'
import { collection, doc, writeBatch } from 'firebase/firestore'
import Button from '../Button'

const AdBannerListAddButton = () => {
  const handleButtonClick = async () => {
    const batch = writeBatch(store)

    adBanners.forEach((banner) => {
      const docRef = doc(collection(store, COLLECTIONS.ADBANNER))

      batch.set(docRef, banner)
    })

    await batch.commit()

    alert('카드 리스트 추가완료!')
  }

  return <Button onClick={handleButtonClick}>카드 리스트 추가하기</Button>
}

export default AdBannerListAddButton
