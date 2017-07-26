/* eslint-disable no-unused-vars */
import Demo from './Demo'

export default {
  functional: true,
  render: function (h, context) {
    console.log(context)
    context.data.attrs.text = '我是 SimpleDemo组件'
    return (
      <Demo class="box" {...context.data} />
    )
  }
}
