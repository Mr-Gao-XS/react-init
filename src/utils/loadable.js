import { lazy } from 'react'

export const DefaultLayout = lazy(() =>
  import(/* webpackChunkName: 'layout' */ '../views/Layout')
)

export const NotFound = lazy(() =>
  import(/* webpackChunkName: '404' */ '../views/404')
)

export const Login = lazy(() =>
  import(/* webpackChunkName: 'login' */ '../views/Login')
)
