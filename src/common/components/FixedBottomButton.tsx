import { colors } from '@/styles/colorSet'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { createPortal } from 'react-dom'
import Button from '@/common/components/Button'
interface FixedBottomButtonProps {
  label: string
  onClick: () => void
}
const FixedBottomButton = (props: FixedBottomButtonProps) => {
  const { label, onClick } = props

  const $portalRoot = document.getElementById('root-portal')
  if (!$portalRoot) {
    return null
  }
  return createPortal(
    <Container>
      <Button size="medium" full={true} onClick={onClick} css={buttonStyles}>
        {label}
      </Button>
    </Container>,
    $portalRoot,
  )
}

export default FixedBottomButton

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.white};
  padding: 20px 10px 8px;
`

const buttonStyles = css`
  border-radius: 8px;
`
