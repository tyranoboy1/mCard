import Form from '@/components/signin/Form'
import { useAlertContext } from '@/context/AlertContext'
import { IFormValues } from '@/models/signin'
import { auth } from '@/remote/firebase'
import { FirebaseError } from 'firebase/app'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const SignInPage = () => {
  const navigate = useNavigate()
  const { open } = useAlertContext()
  const handleSubmit = useCallback(
    async (formValues: IFormValues) => {
      const { email, password } = formValues
      try {
        await signInWithEmailAndPassword(auth, email, password)
        navigate('/')
      } catch (e) {
        /** 파이어베이스 에러 분류 */
        if (e instanceof FirebaseError) {
          if (e.code === 'auth/invalid-credential') {
            open({
              title: '계정의 정보를 다시 확인해주세요',
              onButtonClick: () => {},
            })
            return
          }
        }
        /** 일반적인 에러 처리 */
        open({
          title: '잠시후 다시 시도해주세요',
          onButtonClick: () => {},
        })
      }
    },
    [open],
  )
  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SignInPage
