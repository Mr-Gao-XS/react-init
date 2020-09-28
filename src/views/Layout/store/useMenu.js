import React from 'react'
import { useState } from 'react'
import { createModel } from 'hox'
import {
  HomeFilled,
  AppstoreFilled,
  ExclamationCircleFilled,
  LayoutFilled
} from '@ant-design/icons'
import { Menu, Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import fp from 'lodash/fp'
import { useBasicModel } from '../../../store'
import { useCollapseModel } from '.'

const { SubMenu } = Menu

const defaulMenu = [
  {
    key: '/index',
    title: '首页',
    icon: <HomeFilled />
  },
  {
    key: '/general',
    title: '通用',
    icon: <AppstoreFilled />,
    subs: [
      { key: '/general/button', title: '按钮', icon: '' },
      { key: '/general/icon', title: '图标', icon: '' }
    ]
  },
  {
    key: '/display',
    title: '展示',
    icon: <LayoutFilled />,
    subs: [{ key: '/display/table', title: '表格', icon: '' }]
  },
  {
    key: '/about',
    title: '关于',
    icon: <ExclamationCircleFilled />
  }
]

const useMenuModel = () => {
  const { isMobile } = useBasicModel()
  const { changeCollapse } = useCollapseModel()
  const [menu] = useState(defaulMenu)
  const [selectedKeys, setSelectedKeys] = useState([])
  const [openKeys, setOpenKeys] = useState([])

  const renderMenuItem = ({ key, title, icon }) => (
    <Menu.Item key={key}>
      <Link to={key}>
        {icon}
        <span>{title}</span>
      </Link>
    </Menu.Item>
  )

  const renderSubMenuItem = ({ key, title, icon, subs }) => (
    <SubMenu key={key} icon={icon} title={title}>
      {subs.map((item) => renderMenuItem(item))}
    </SubMenu>
  )

  const menuClick = ({ key }) => {
    setSelectedKeys([key])
    openKeySet(key)
    setTimeout(() => {
      if (isMobile) {
        changeCollapse(false)
      }
    }, 0)
  }

  const openKeySet = (key) => {
    let arr = key.split('/').map((item) => `/${item}`)
    arr = arr.slice(1, arr.length)
    if (arr.length > 1) {
      setOpenKeys([arr[0]])
    } else {
      setOpenKeys([])
    }
  }

  const onOpenChange = (openKeys) => {
    setOpenKeys(openKeys)
  }

  const renderBreadcrumb = ({ pathname }) => {
    let arr = pathname.split('/').map((item) => `/${item}`)
    arr = arr.slice(1, arr.length)
    if (arr[0] === '/index') {
      arr = []
    }
    arr = arr.map((item) => {
      let obj = fp.find((cur) => cur.key === item, menu)
      if (!obj) {
        for (let i = 0; i < menu.length; i++) {
          if (menu[i].subs) {
            let cur = fp.find(
              (cur) => cur.key.indexOf(item) !== -1,
              menu[i].subs
            )
            if (cur) {
              obj = cur
              break
            }
          }
        }
      }
      return { key: item, txt: obj ? obj.title : '' }
    })
    return pathname === '/index' ? (
      ''
    ) : (
      <Breadcrumb style={{ marginBottom: 20 }} computedmatch={undefined}>
        <Breadcrumb.Item>
          <Link
            to='/index'
            onClick={() => {
              menuClick({ key: '/index' })
            }}
          >
            首页
          </Link>
        </Breadcrumb.Item>
        {arr.map((item) => (
          <Breadcrumb.Item key={item.key}>{item.txt}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    )
  }

  return {
    menu,
    selectedKeys,
    openKeys,
    openKeySet,
    menuClick,
    onOpenChange,
    renderMenuItem,
    setOpenKeys,
    renderSubMenuItem,
    setSelectedKeys,
    renderBreadcrumb
  }
}

export default createModel(useMenuModel)
