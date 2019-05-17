import store from '../store/index'

export default function (to, from, next) {
  if (store.getters.user) {
    next()
  } else {
    next()
    // next('/login?loginError=true')
  }
}
