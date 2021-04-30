import React from 'react'
import { PageInfoWrap } from './styled'

const PageInfo = (props) => {
  const { title = '如何使用', children } = props
  return (
    <PageInfoWrap>
      <h1>{title}</h1>
      {children}
    </PageInfoWrap>
  )
}

export default PageInfo
