import Form from '@/components/signin/Form'
import { IFormValues } from '@/models/signin'
import { useCallback } from 'react'

const SignInPage = () => {
  const handleSubmit = useCallback((formValues: IFormValues) => {}, [])
  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SignInPage
