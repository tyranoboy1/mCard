import styled from '@emotion/styled'

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return <MobileAppLayout>{children}</MobileAppLayout>
}

export default MobileLayout

const MobileAppLayout = styled.div`
  width: 768px;
  height: 100%;
  max-width: 768px;
`
