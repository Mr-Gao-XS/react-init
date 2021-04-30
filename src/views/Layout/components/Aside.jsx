import React, { memo, useEffect } from 'react'
import { Menu } from 'antd'
import { withModel } from 'hox'
import { withRouter } from 'react-router-dom'
import { AsideWrap, LogoWrap, DrawerWrap } from '../styled'
import { useCollapseModel, useMenuModel } from '../store'
import { Icon } from '@/components'
import { useBasicModel } from '../../../store'

const Aside = (props) => {
  const {
    location,
    collapse,
    menu,
    openKeys,
    selectedKeys,
    renderSubMenuItem,
    renderMenuItem,
    menuClick,
    setSelectedKeys,
    openKeySet,
    onOpenChange,
    isMobile,
    changeCollapse
  } = props
  useEffect(() => {
    setTimeout(() => {
      const { pathname } = location
      openKeySet(pathname)
      setSelectedKeys([pathname])
    }, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  const menuShow = () => (
    <AsideWrap collapsed={collapse && !isMobile} width='208'>
      <LogoWrap>
        <Icon style={{ fontSize: 38, color: '#fff' }} type='bear' />{' '}
        {collapse && !isMobile ? '' : <span>熊崽</span>}
      </LogoWrap>
      <Menu
        theme='dark'
        mode='inline'
        style={{ marginTop: 20 }}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={menuClick}
      >
        {menu.map((item) =>
          item.subs && item.subs.length > 0
            ? renderSubMenuItem(item)
            : renderMenuItem(item)
        )}
      </Menu>
    </AsideWrap>
  )

  return isMobile ? (
    <DrawerWrap
      visible={collapse}
      placement='left'
      width='208'
      closable={false}
      onClose={() => {
        changeCollapse(false)
      }}
    >
      {menuShow()}
    </DrawerWrap>
  ) : (
    menuShow()
  )
}

const models = [useCollapseModel, useMenuModel, useBasicModel]

const mapToProps = ([collapse, menuModel, basicModel]) => ({
  collapse: collapse.collapse,
  changeCollapse: collapse.changeCollapse,
  menu: menuModel.menu,
  openKeys: menuModel.openKeys,
  selectedKeys: menuModel.selectedKeys,
  renderMenuItem: menuModel.renderMenuItem,
  renderSubMenuItem: menuModel.renderSubMenuItem,
  menuClick: menuModel.menuClick,
  setSelectedKeys: menuModel.setSelectedKeys,
  openKeySet: menuModel.openKeySet,
  onOpenChange: menuModel.onOpenChange,
  isMobile: basicModel.isMobile
})

export default withRouter(memo(withModel(models, mapToProps)(Aside)))
