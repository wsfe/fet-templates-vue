// 环境
export const NODE_ENV = process.env.NODE_ENV || 'production'

// 路由默认配置，路由表并不从此注入
export const ROUTER_DEFAULT_CONFIG = {
  waitForData: true,
  transitionOnLoad: true
}

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  maxContentLength: 2000,
  headers: {},
  baseURL: window.globalConfig.baseURL || '//mock.com'
}

// vuex 默认配置
export const VUEX_DEFAULT_CONFIG = {
  strict: process.env.NODE_ENV !== 'production'
}

// API 默认配置
export const API_DEFAULT_CONFIG = {
  debug: process.env.CUSTOM_ENV === 'local',
  sep: '/'
}

// CONST 默认配置
export const CONST_DEFAULT_CONFIG = {
  sep: '/'
}

// 还有一些方便开发的配置
export const CONSOLE_REQUEST_ENABLE = process.env.CUSTOM_ENV === 'local' // 开启请求参数打印
export const CONSOLE_RESPONSE_ENABLE = process.env.CUSTOM_ENV === 'local' // 开启响应参数打印
