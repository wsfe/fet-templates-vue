import Store from '@/plugins/store'
import actions from './actions'
import moduleA from './childrenAmodule'
import moduleB from './childrenBmodule'

export default {
  install () {
    Store.registerModule(['pageA'], {
      actions,
      modules: {
        moduleA,
        moduleB
      },
      namespaced: true
    })
  },
  uninstall () {
    Store.unregisterModule(['pageA'])
  }
}
