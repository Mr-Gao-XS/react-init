/**
 * @desc 首页卡片（待优化,echarts以及卡片）
 *
 */

import React, { memo, useEffect, useState } from 'react'
import { withModel } from 'hox'
import { Tooltip } from 'antd'
import {
  QuestionCircleOutlined,
  CaretUpFilled,
  CaretDownFilled
} from '@ant-design/icons'
import { CardWrap, CardItem, CardBody } from './styled'
import { useBasicModel } from '@/store'

const Card = (props) => {
  const { screenWidth, screenHeight } = props

  const [chart, setChart] = useState(null)

  useEffect(() => {
    let option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value',
        show: false
      },
      grid: {
        left: 0,
        right: 0
      },
      tooltip: {
        formatter: '{b0}: {c0}<br />{b1}: {c1}'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
          lineStyle: {
            color: '#975fe4'
          },
          areaStyle: {
            color: '#975fe4'
          }
        }
      ]
    }
    // eslint-disable-next-line no-undef
    let cc = echarts.init(document.querySelector('#line'))
    cc.setOption(option)
    setChart(cc)
  }, [])

  useEffect(() => {
    if (chart) {
      chart.resize()
    }
  }, [screenWidth, screenHeight, chart])

  return (
    <CardWrap>
      <CardItem className='card-item'>
        <CardBody>
          <p>
            总销售额
            <Tooltip title='指标说明'>
              <QuestionCircleOutlined></QuestionCircleOutlined>
            </Tooltip>
          </p>
          <h2>¥ 126,560</h2>
          <div className='content'>
            周同比<span style={{ marginLeft: 8 }}>12%</span>
            <CaretUpFilled
              style={{ fontSize: 20, color: 'red', transform: 'scale(0.5)' }}
            ></CaretUpFilled>
            <span style={{ marginLeft: 10 }}>日同比</span>
            <span style={{ marginLeft: 8 }}>12%</span>
            <CaretDownFilled
              style={{ fontSize: 20, color: 'green', transform: 'scale(0.5)' }}
            ></CaretDownFilled>
          </div>
          <div className='info'>
            日销售额<span>￥12,423</span>
          </div>
        </CardBody>
      </CardItem>
      <CardItem className='card-item'>
        <CardBody>
          <p>
            访问量
            <Tooltip title='指标说明'>
              <QuestionCircleOutlined></QuestionCircleOutlined>
            </Tooltip>
          </p>
          <h2>9,846</h2>
          <div className='content' id='line'></div>
          <div className='info'>
            日访问量<span>12,423</span>
          </div>
        </CardBody>
      </CardItem>
      <CardItem className='card-item'>
        <CardBody>
          <p>
            支付笔数
            <Tooltip title='指标说明'>
              <QuestionCircleOutlined></QuestionCircleOutlined>
            </Tooltip>
          </p>
          <h2>6,560</h2>
          <div className='content'></div>
          <div className='info'>
            转化率<span>60%</span>
          </div>
        </CardBody>
      </CardItem>
      <CardItem className='card-item'>
        <CardBody>
          <p>
            运营活动效果
            <Tooltip title='指标说明'>
              <QuestionCircleOutlined></QuestionCircleOutlined>
            </Tooltip>
          </p>
          <h2>78%</h2>
          <div className='content'></div>
          <div className='info'>
            日销售额<span>￥12,423</span>
          </div>
        </CardBody>
      </CardItem>
    </CardWrap>
  )
}

const models = [useBasicModel]
const mapToProps = ([basicModel, useChart]) => ({
  screenWidth: basicModel.screenWidth,
  screenHeight: basicModel.screenHeight
})

export default memo(withModel(models, mapToProps)(Card))
