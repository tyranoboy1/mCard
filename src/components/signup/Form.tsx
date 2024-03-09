import FixedBottomButton from '@/common/components/FixedBottomButton'
import Flex from '@/common/components/Flex'
import Spacing from '@/common/components/Spacing'
import TextField from '@/common/components/TextField'
import { css } from '@emotion/react'

const Form = () => {
  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField label="이메일" placeholder="olaf@gmail.com" />
      <Spacing size={16} />
      <TextField label="패스워드" type="password" />
      <Spacing size={16} />
      <TextField label="패스워드 재확인" type="password" />
      <Spacing size={16} />
      <TextField label="이름" placeholder="올라프" />
      <FixedBottomButton label="회원가입" disabled={true} onClick={() => {}} />
    </Flex>
  )
}

export default Form

const formContainerStyles = css`
  padding: 24px;
`
