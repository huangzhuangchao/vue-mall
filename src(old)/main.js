import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)



//定义全局指令
// //懒加载指令
// app.directive('img-lazy', {
//   mounted(el, binding) {
//     // el:指令绑定的那个元素 img
//     // binding: binding.value 指令等于号后面绑定的表达式的值 图片url
//     // console.log(el, binding.value);

//     useIntersectionObserver(
//       el,
//       ([{ isIntersecting }], observerElement) => {
//         if(isIntersecting){

//           //进入视口区域
//           el.src = binding.value
//         }
//       },
//     )
//   }
// })

//引入懒加载指令插件并且注册
import {lazyPlugin} from '@/directives'


app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')
