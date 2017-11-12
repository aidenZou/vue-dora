// module.exports = require('./src/index.vue')

import Vue from 'vue'
import Toast from './src/index'
import { createAPI } from 'vdora-helper'

createAPI(Vue, Toast, [], true)

export default Toast
