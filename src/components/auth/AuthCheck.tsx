import { auth } from '@/remote/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'

/** 인증 처리 확인 */
const AuthCheck = ({ children }: { children: React.ReactNode }) => {
  const [initialize, setInitialize] = useState<boolean>(false)

  onAuthStateChanged(auth, (user) => {
    setInitialize(true)
  })
  //TODO 로딩 처리 추가
  if (!initialize) {
    return <div>인증 처리 중</div>
  }
  return <>{children}</>
}

export default AuthCheck
