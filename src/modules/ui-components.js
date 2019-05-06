
// 注册全局组件js
import Vue from 'vue'

import UITitleBox from '../components/commons/UITitleBox.vue'
import UIInput from '../components/commons/UIInput.vue'

import GoodCommonItem from '../components/commons/GoodCommonItem.vue'
import AppNav from '../components/commons/AppNav.vue'
import AppHeader from '../components/commons/AppHeader.vue'

Vue.component('ui-title-box', UITitleBox)
Vue.component('ui-input', UIInput)

Vue.component('good-common-item', GoodCommonItem)
Vue.component('app-nav', AppNav)
Vue.component('app-header', AppHeader)