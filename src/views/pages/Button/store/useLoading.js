import { useState } from 'react'
import { createModel } from 'hox'

const useLoadingModel = () => {
  const [loading, setLoading] = useState(false)

  const loadingChange = (flag) => {
    setLoading(flag)
    if (flag) {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }

  return {
    loading,
    setLoading,
    loadingChange
  }
}

export default createModel(useLoadingModel)
