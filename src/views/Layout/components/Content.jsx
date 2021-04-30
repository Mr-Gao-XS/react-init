import React, { memo } from 'react'
import { withModel } from 'hox'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GithubFilled
} from '@ant-design/icons'
import Avatar from './components/Avatar'
import { useCollapseModel } from '../store'
import {
  ContentWrap,
  HeaderWrap,
  Main,
  CollapsedWrap,
  GithubWrap
} from '../styled'
import { useBasicModel } from '@/store'

const Content = (props) => {
  const { collapse, changeCollapse, isMobile } = props

  return (
    <ContentWrap style={{ marginLeft: isMobile ? 0 : collapse ? 80 : 208 }}>
      <HeaderWrap style={{ left: isMobile ? 0 : collapse ? 80 : 208 }}>
        <CollapsedWrap onClick={() => changeCollapse(!collapse)}>
          {collapse || isMobile ? (
            <MenuUnfoldOutlined style={{ fontSize: 22 }} />
          ) : (
            <MenuFoldOutlined style={{ fontSize: 22 }} />
          )}
        </CollapsedWrap>
        <GithubWrap>
          <GithubFilled style={{ fontSize: 20, marginLeft: 'auto' }} />
        </GithubWrap>
        <Avatar />
      </HeaderWrap>
      <Main>{props.children}</Main>
    </ContentWrap>
  )
}

const models = [useCollapseModel, useBasicModel]

const mapToProps = ([collapse, basicModel]) => ({
  collapse: collapse.collapse,
  changeCollapse: collapse.changeCollapse,
  isMobile: basicModel.isMobile
})

export default memo(withModel(models, mapToProps)(Content))
