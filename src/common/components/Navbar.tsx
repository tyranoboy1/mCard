import { Link, useLocation } from 'react-router-dom'
import Flex from '@/common/components/Flex'
import Button from '@/common/components/Button'
import { css } from '@emotion/react'

/** 로그인 회원가입 버튼 */
const Navbar = () => {
  const location = useLocation()
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false
  return (
    <Flex css={navbarContainerStyles} justify="space-between">
      <Link to="/">홈</Link>
      {showSignButton ? (
        <Link to="/signin">
          <Button>로그인 / 회원가입</Button>
        </Link>
      ) : null}
    </Flex>
  )
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid;
`
export default Navbar
