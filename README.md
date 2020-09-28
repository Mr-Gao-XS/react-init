# React 后台管理系统

[预览地址](https://ferrydjing.github.io/react-backstage/.)

## 项目描述

基于 React 打造的后台管理系统模版

基于 React hooks、antd、 hox、 React router 等技术

css 样式基于 styled components 组件实现

### 技术栈

`React@16.13.1 + React-router-dom@5.2.0 + styled-components@5.1.1 + antd@4.3.4 + hox@1.1.1等`

> `Create React App` 脚手架工具

> `react-app-rewired` 项目配置工具

> `customize-cra` 项目配置工具

> `dotenv-cli` 打包区分环境工具

> `hox` 基于 react hooks 的状态管理工具

### 基本功能

1. - [x] 路由懒加载
2. - [x] 面包屑导航
3. - [ ] 常用 ui 展示
    - - [ ] 登录页
    - 主页面
      - - [ ] 首页
      - - [x] 按钮页
      - - [x] 图标页
    - - [x] 404
### 项目目录

```
├── config-overrides.js         # 打包配置
├── public                      # 公共目录（不参与编译）
├── src                         # 项目主目录
│   ├── App.jsx
│   ├── api                     # axios封装
│   │   ├── fetch.js
│   │   └── index.js
│   ├── components              # 项目公共组件
│   │   ├── Icon
│   │   ├── index.js
│   │   └── page-info
│   ├── index.js                # 项目入口文件
│   ├── routers                 # 路由配置
│   ├── setupProxy.js           # 代理设置
│   ├── utils                   # 工具目录
│   └── views                   # 项目页面

```

### 使用说明

```
git clone https://github.com/ferrydjing/react-backstage.git

cd react-backstage

// 安装依赖
npm install // yarn

// 运行
npm start // yarn start

// 打包
npm run build // yarn build

// 打包测试服

npm run build:test // yarn build:test

```
