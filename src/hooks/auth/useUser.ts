import { userAtom } from '@/atoms/user'
import { useRecoilValue } from 'recoil'

/** User 정보를 가져오는 커스텀 훅 */
const useUser = () => {
  return useRecoilValue(userAtom)
}

export default useUser
