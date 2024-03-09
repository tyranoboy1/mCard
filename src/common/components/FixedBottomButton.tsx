import { colors } from '@/styles/colorSet'
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { createPortal } from 'react-dom'
import Button from '@/common/components/Button'
interface FixedBottomButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}
const FixedBottomButton = (props: FixedBottomButtonProps) => {
  const { label, onClick, disabled } = props

  const $portalRoot = document.getElementById('root-portal')
  if (!$portalRoot) {
    return null
  }
  return createPortal(
    <Container>
      <Button
        size="medium"
        full={true}
        onClick={onClick}
        css={buttonStyles}
        disabled={disabled}
      >
        {label}
      </Button>
    </Container>,
    $portalRoot,
  )
}

export default FixedBottomButton

const slideup = keyframes`
  to {
    transform: translateY(0)
  }
`

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.white};
  padding: 20px 10px 8px;
  transform: translateY(100%);
  animation: ${slideup} 0.5s ease-in-out forwards;
`

const buttonStyles = css`
  border-radius: 8px;
`
