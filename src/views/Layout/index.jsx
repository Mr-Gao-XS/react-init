import React, { memo } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Layout, BackTop } from 'antd'
import { withModel } from 'hox'
import { Aside, Content } from './components'
import routes from '@/routers'
import { useMenuModel } from './store'
import { useBasicModel } from '../../store'

const LayoutContainer = (props) => {
  const { location, renderBreadcrumb, isMobile } = props

  return (
    <Layout style={{ overflow: 'hidden' }}>
      <BackTop />
      <Aside style={{ display: isMobile ? 'none' : 'block' }}></Aside>
      <Content>
        {renderBreadcrumb(location)}
        <Switch>
          {routes.map((Item) => {
            return (
              <Route
                key={Item.path}
                path={Item.path}
                exact={Item.exact}
                render={(props) => <Item.component {...props} />}
              ></Route>
            )
          })}
          <Redirect to='/404' {...props} />
        </Switch>
      </Content>
    </Layout>
  )
}

const models = [useMenuModel, useBasicModel]

const mapModelsToProps = ([menuModel, basicModel]) => ({
  menu: menuModel.menu,
  menuClick: menuModel.menuClick,
  renderBreadcrumb: menuModel.renderBreadcrumb,
  isMobile: basicModel.isMobile
})

export default withRouter(
  memo(withModel(models, mapModelsToProps)(LayoutContainer))
)
