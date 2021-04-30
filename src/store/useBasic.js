import { useState } from 'react'
import { createModel } from 'hox'

const useBasicModel = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0)
  const [screenHeight, setScreenHeight] = useState(0)

  const judgeIsMobile = () => {
    setIsMobile(document.body.clientWidth < 768)
  }

  return {
    isMobile,
    judgeIsMobile,
    screenWidth,
    setScreenWidth,
    screenHeight,
    setScreenHeight
  }
}

export default createModel(useBasicModel)
