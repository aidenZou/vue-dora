/* eslint-disable no-unused-vars */
import Popup from '@/vdora-container-popup'

export default function (Component) {
  return {
    functional: true,
    name: 'popup',
    // props: {
    //   visible: {
    //     type: Boolean,
    //     required: true,
    //     default: false
    //   },
    //   isOrdered: Boolean
    // },
    render: function (h, context) {
      // context.data.attrs = context.data.attrs || {}
      // context.data.attrs.text = '我是 DemoPopup组件 1'
      context.data.props = context.data.props || {}
      // context.data.props.text = '我是 DemoPopup组件 2'

      console.log(context.props.text)
      context.props.text = '我是 DemoPopup组件 3'

      console.log(context.props.text)

      const fn = context.listeners.click
      context.listeners['click'] = function (...args) {
        console.log('click for PopupContainer before...')
        fn.apply(this, args)
        console.log('click for PopupContainer after...')
      }

      if (context.props.visible) {
        console.log('Popup组件展示')
      }

      // console.log(JSON.stringify(context.data.attrs.names))

      // context.data.attrs.name += 'Popup'
      // context.data.attrs.names = (context.data.attrs.names || []).push('popup')
      // context.data.attrs.names = (context.data.attrs.names || [])
      // context.data.attrs.names.push('popup')

      // context.data.props.text = '我是 DemoPopup组件 2'

      context.data.props.names = (context.data.props.names || [])
      context.data.props.names.push('popup')

      // <Popup {...context.data} {...context.props}>
      return (
        <Popup {...context.data} {...context.props}>
          <Component {...context.data} {...context.props}/>
        </Popup>
      )
    }
  }
}
