// import loadable from '@/utils/loadable'
import { lazy } from 'react'

const Index = lazy(() =>
  import(/*webpackChunkName: 'index' */ '@/views/pages/Index')
)

const About = lazy(() =>
  import(/*webpackChunkName: 'layout' */ '@/views/pages/About')
)

const Button = lazy(() =>
  import(/*webpackChunkName: 'layout' */ '@/views/pages/Button')
)
const Icon = lazy(() =>
  import(/*webpackChunkName: 'layout' */ '@/views/pages/Icon')
)

const Table = lazy(() =>
  import(/*webpackChunkName: 'layout' */ '@/views/pages/Table')
)

export const DefaultLayout = lazy(() =>
  import(/* webpackChunkName: 'index' */ '../views/Layout')
)

export const NotFound = lazy(() =>
  import(/* webpackChunkName: '404' */ '../views/404')
)

export const Login = lazy(() =>
  import(/* webpackChunkName: 'login' */ '../views/Login')
)

const routes = [
  { path: '/index', exact: true, name: 'Index', component: Index },
  { path: '/about', exact: true, name: 'About', component: About },
  { path: '/general/button', exact: true, name: 'Button', component: Button },
  { path: '/general/icon', exact: true, name: 'Icon', component: Icon },
  { path: '/display/table', exact: true, name: 'Table', component: Table }
]

export default routes
