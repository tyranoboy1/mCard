import Form from '@/components/signup/Form'
import { COLLECTIONS } from '@/constants'
import { IFormValues } from '@/models/signup'
import { auth, store } from '@/remote/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const navigate = useNavigate()
  /** 회원가입 버튼을 눌렀을때의 함수 */
  const handleSubmit = async (formValues: IFormValues) => {
    const { email, password, name } = formValues

    /** 로그인 인증 처리 */
    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    /** User의 displayName 업데이트 */
    await updateProfile(user, {
      displayName: name,
    })

    const newUser = {
      uid: user.uid,
      email: user.email,
      displayName: name,
    }

    /** 새로운 User 데이터로 저장 */
    await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser)
    navigate('/')
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SignUpPage
