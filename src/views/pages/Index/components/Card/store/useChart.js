import { useState } from 'react'
import { createModel } from 'hox'

const useChart = () => {
  const [myChart, setMyChart] = useState(null)

  const chartInit = (val, option) => {
    console.log(val, option)
    val.setOption(option)
    setMyChart(val)
  }

  return {
    myChart,
    chartInit
  }
}

export default createModel(useChart)
