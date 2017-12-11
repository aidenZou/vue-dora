// /* eslint-disable no-unused-vars */

export default function (Component) {
  return {
    functional: true,
    name: 'box',
    render: function (h, context) {
      const fn = context.listeners['click']
      context.listeners['click'] = function (...args) {
        console.log('click for BoxContainer before...')
        fn.apply(this, args)
        console.log('click for BoxContainer after...')
      }

      // context.data.attrs.text = '我是 DemoBox组件'

      // context.data.attrs.name += 'Box'
      // context.data.attrs.names = (context.data.attrs.names || []).push('box')

      // context.data.attrs.names = (context.data.attrs.names || [])
      // context.data.attrs.names.push('box')

      context.data.props = context.data.props || {}

      // context.data.props.text = '我是 Box组件'

      context.data.props.names = (context.data.props.names || [])
      context.data.props.names.push('box')

      return (
        <Component class="box" {...context.data} {...context.props}/>
      )
    }
  }
}
