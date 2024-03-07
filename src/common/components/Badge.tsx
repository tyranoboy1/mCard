import { colors } from '@/styles/colorSet'
import styled from '@emotion/styled'
import React from 'react'
import { IBadge } from '../interface/common.interface'
import Text from './Text'

const Badge = (props: IBadge) => {
  const { label } = props
  return (
    <Container>
      <Text bold={true} typography="t7" color="white">
        {label}
      </Text>
    </Container>
  )
}

export default Badge

const Container = styled.div`
  border-radius: 12px;
  background-color: ${colors.blue};
  padding: 2px 8px;
`
