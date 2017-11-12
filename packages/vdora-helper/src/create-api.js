import { camelize } from './string'
import createAPIComponent from './create-api-component'

/**
 *
 * @param {*} Vue Vue Vue 函数
 * @param {*} Component Vue 组件，组件必须有 name
 * @param {*} events 组件实例 emit 的事件名集合
 * @param {*} single 是否为单例
 *
 * createAPI(Vue, Dialog, ['confirm', 'cancel'], false)
 *
 * this.$createDialog(config, [renderFn])
 */
export default function createAPI (Vue, Component, events, single) {
  const api = createAPIComponent.apply(this, arguments)
  const name = Component.name
  const pureName = name.replace(/^v-/i, '')
  const apiName = `$${camelize(pureName)}`
  const createName = `$${camelize(`create-${pureName}`)}`
  Vue.prototype[apiName] = api
  Vue.prototype[createName] = api.create
  return api
}
