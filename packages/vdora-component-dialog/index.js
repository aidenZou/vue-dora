// module.exports = require('./src/index.vue')

import Vue from 'vue'
import Dialog from './src/index'
import { createAPI } from 'vdora-helper'

createAPI(Vue, Dialog, ['confirm', 'cancel'], false)

export default Dialog
