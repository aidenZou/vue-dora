/* eslint-disable no-unused-vars */
import Popup from '@/vdora-container-popup'
import Demo from './Demo'

export default {
  functional: true,
  render: function (h, context) {
    context.data.attrs.text = '我是 PopupDemo组件'
    return (
      <Popup {...context.data} {...context.props}>
        <Demo {...context.data} />
      </Popup>
    )
  }
}
