import { Link, useLocation } from 'react-router-dom'
import Flex from '@/common/components/Flex'
import Button from '@/common/components/Button'
import { css } from '@emotion/react'
import useUser from '@/hooks/auth/useUser'
import { useCallback } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '@/remote/firebase'

/** 로그인 회원가입 버튼 */
const Navbar = () => {
  const location = useLocation()
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false

  const user = useUser()

  const handleLogout = useCallback(() => {
    signOut(auth)
  }, [])

  /** 로그인 유무에 따라 보여지는 버튼 함수 */
  const renderButton = useCallback(() => {
    if (user !== null) {
      return <Button onClick={handleLogout}>로그아웃</Button>
    }
    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>로그인 / 회원가입</Button>
        </Link>
      )
    }
    return null
  }, [handleLogout, showSignButton, user])

  return (
    <Flex css={navbarContainerStyles} justify="space-between">
      <Link to="/">홈</Link>
      {renderButton()}
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
