import FixedBottomButton from '@/common/components/FixedBottomButton'
import Flex from '@/common/components/Flex'
import Spacing from '@/common/components/Spacing'
import TextField from '@/common/components/TextField'
import { IFormValues } from '@/models/signup'
import { css } from '@emotion/react'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import validator from 'validator'

/** 유효성 검사해주는 함수 */
const validate = (pValue: IFormValues) => {
  let errors: Partial<IFormValues> = {}
  if (validator.isEmail(pValue.email) === false) {
    errors.email = '이메일 형식을 확인해주세요'
  }
  if (pValue.password.length < 8) {
    errors.password = '비밀번호를 8자리 이상 입력해주세요'
  }
  if (pValue.confirmPassword.length < 8) {
    errors.confirmPassword = '비밀번호를 8자리 이상 입력해주세요'
  } else if (
    validator.equals(pValue.password, pValue.confirmPassword) === false
  ) {
    errors.confirmPassword = '비밀번호를 확인해주세요'
  }
  if (pValue.name.length < 2) {
    errors.name = '이름은 두글자 이상 입력해주세요'
  }
  return errors
}
//TODO 파이어베이스 로그인 연동
const Form = ({
  onSubmit,
}: {
  onSubmit: (formValues: IFormValues) => void
}) => {
  /** Form에 필요한 상태 데이터 */
  const [formValues, setFormValues] = useState<IFormValues>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  })
  const [enterInput, setEnterInput] = useState<Partial<IFormValues>>({})
  /** 에러 감지 */
  const errors = useMemo(() => validate(formValues), [formValues])

  const handleBlur = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEnterInput((prev) => ({
      ...prev,
      [e.target.name]: 'true',
    }))
  }, [])
  /** 입력값에 따라 상태 데이터를 업데이트 시켜주는 함수 */
  const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    // 동적으로 특정 문자열을 가진 객체에 접근
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }, [])

  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        label="이메일"
        name="email"
        placeholder="olaf@gmail.com"
        value={formValues.email}
        onChange={handleFormValues}
        isError={Boolean(enterInput.email) && Boolean(errors.email)}
        helpMessage={Boolean(enterInput.email) ? errors.email : ''}
        onBlur={handleBlur}
      />
      <Spacing size={16} />
      <TextField
        label="패스워드"
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleFormValues}
        isError={Boolean(enterInput.password) && Boolean(errors.password)}
        helpMessage={Boolean(enterInput.password) ? errors.password : ''}
        onBlur={handleBlur}
      />
      <Spacing size={16} />
      <TextField
        label="패스워드 재확인"
        name="confirmPassword"
        type="password"
        value={formValues.confirmPassword}
        onChange={handleFormValues}
        isError={
          Boolean(enterInput.confirmPassword) && Boolean(errors.confirmPassword)
        }
        helpMessage={
          Boolean(enterInput.confirmPassword) ? errors.confirmPassword : ''
        }
        onBlur={handleBlur}
      />
      <Spacing size={16} />
      <TextField
        label="이름"
        name="name"
        placeholder="올라프"
        value={formValues.name}
        onChange={handleFormValues}
        isError={Boolean(enterInput.name) && Boolean(errors.name)}
        helpMessage={Boolean(enterInput.name) ? errors.name : ''}
        onBlur={handleBlur}
      />
      <FixedBottomButton
        label="회원가입"
        disabled={false}
        onClick={() => {
          onSubmit(formValues)
        }}
      />
    </Flex>
  )
}

export default Form

const formContainerStyles = css`
  padding: 24px;
`
