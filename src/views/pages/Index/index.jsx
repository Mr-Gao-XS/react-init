import React, { memo } from 'react'
import { IndexWrap } from './styled'
import { Card } from './components'

const Index = (props) => {
  return (
    <IndexWrap>
      <Card></Card>
    </IndexWrap>
  )
}

export default memo(Index)
