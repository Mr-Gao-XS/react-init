import { useState } from 'react'
import { createModel } from 'hox'

const useCollapse = () => {
  const [collapse, setCollapse] = useState(false)
  const changeCollapse = (val) => {
    setCollapse(val)
  }

  return {
    collapse,
    changeCollapse
  }
}

export default createModel(useCollapse)
