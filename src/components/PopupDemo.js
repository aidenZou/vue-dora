import Popup from '@/components/popup'
import Demo from './Demo'

console.log(Popup, Demo)

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
