// /* eslint-disable no-unused-vars */

export default function (Component) {
  return {
    functional: true,
    render: function (h, context) {
      const fn = context.listeners['on-click']
      context.listeners['on-click'] = function (...args) {
        console.log('on-click for BoxContainer before...')
        fn.apply(this, args)
        console.log('on-click for BoxContainer after...')
      }
      context.data.attrs.text = '我是 DemoBox组件'
      return (
        <Component class="box" {...context.data} />
      )
    }
  }
}
