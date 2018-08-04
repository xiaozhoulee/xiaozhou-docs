import Vue from 'vue'
import Router from 'vue-router'
import content from "../components/content";
import title from "../components/titleList";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'title',
      component: title
    },
    {
      path: '/content',
      name: 'content',
      component: content
    }
  ]
})
