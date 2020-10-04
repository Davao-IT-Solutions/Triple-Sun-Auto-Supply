import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: 109306634181447, //  change 'null' to your Facebook Page ID,
  theme_color: '#0084ff', // theme color in HEX
  locale: 'en_US' // default 'en_US'
})
