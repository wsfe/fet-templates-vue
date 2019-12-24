import buildTree from '@/utils/buildTree'

let menuMap = {}
let authMap = {}
const portalMenu = window.globalConfig.portalMenu
const menuData = buildTree(portalMenu, {
  id: 'code',
  pid: 'pCode',
  rootId: '0'
}, function (node) {
  menuMap[node.code] = node
  authMap[node.code] = node
  node.name = node.code
  node.title = node.cn
  node.path = node.url
  node.pNames = node.pIds
  node.pid = node.pCode
  node.id = node.code
  node.activeName = node.show ? node.name : (
    node.pNames
      .map(name => menuMap[name])
      .filter(node => node.show).pop() ||
    node
  ).name
  node.showBack = !node.show
  return node.show ? node : undefined
})

export default [
  {
    name: 'MAP',
    value: menuMap
  },
  {
    name: 'AUTHMAP',
    value: authMap
  },
  {
    name: 'DATA',
    value: menuData
  }
]
