import Button from '@/common/components/Button'
import Flex from '@/common/components/Flex'
import Spacing from '@/common/components/Spacing'
import Text from '@/common/components/Text'
import TextField from '@/common/components/TextField'
import { IFormValues } from '@/models/signin'

import { colors } from '@/styles/colorSet'
import { css } from '@emotion/react'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
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
  return errors
}
const Form = ({
  onSubmit,
}: {
  onSubmit: (formValues: IFormValues) => void
}) => {
  const [formValues, setFormValuse] = useState<IFormValues>({
    email: '',
    password: '',
  })

  const hadleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValuse((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const errors = useMemo(() => validate(formValues), [formValues])

  const availableSubmit = Object.keys(errors).length === 0
  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        label="이메일"
        name="email"
        onChange={hadleFormValues}
        value={formValues.email}
      />
      <Spacing size={16} />
      <TextField
        label="패스워드"
        type="password"
        name="password"
        onChange={hadleFormValues}
        value={formValues.password}
      />
      <Spacing size={32} />
      <Button
        size="medium"
        disabled={availableSubmit === false}
        onClick={() => onSubmit(formValues)}
      >
        로그인
      </Button>
      <Link to="/signup" css={linkStyles}>
        <Spacing size={12} />
        <Text typography="t7">아직 계정이 없으신가요?</Text>
      </Link>
    </Flex>
  )
}
const formContainerStyles = css`
  padding: 24px;
`
const linkStyles = css`
  text-align: center;
  & > span:hover {
    color: ${colors.blue};
  }
`

export default Form
