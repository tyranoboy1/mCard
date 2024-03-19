import { userAtom } from '@/atoms/user'
import { auth } from '@/remote/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'

/** 인증 처리 확인 */
const AuthCheck = ({ children }: { children: React.ReactNode }) => {
  const [initialize, setInitialize] = useState<boolean>(false)
  const setUser = useSetRecoilState(userAtom)

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      setUser({
        uid: user.uid,
        email: user.email ?? '',
        displayName: user.displayName ?? '',
      })
    } else {
      setUser(null)
    }
    setInitialize(true)
  })
  //TODO 로딩 화면 구현
  if (!initialize) {
    return null
  }
  return <>{children}</>
}

export default AuthCheck
