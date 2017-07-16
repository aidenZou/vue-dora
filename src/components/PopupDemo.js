/* eslint-disable no-unused-vars */
import Popup from '@/vdora-container-popup'
import Demo from './Demo'

export default {
  functional: true,
  render: function (h, context) {
    return (
      <Popup {...context.data} {...context.props}>
        <Demo {...context.data} />
      </Popup>
    )
  }
}
