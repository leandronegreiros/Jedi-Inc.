import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import moment from "moment";

Vue.filter('currency', value => {
	return 'R$ ' + value
})

Vue.filter('formatDate', value => {
	return moment(value).format('DD/MM/YYYY')
})

Vue.use(Vuetify, {
	iconfont: 'md',
})
