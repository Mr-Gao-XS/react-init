import React, { memo } from 'react'

const Icon = (props) => {
  const { type, style } = props
  return <i className={'bacctage-icon-' + type} style={style}></i>
}

export default memo(Icon)
