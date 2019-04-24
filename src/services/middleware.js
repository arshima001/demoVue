import user from './auth'
export default {
  guest (to, from, next) {
    next(!user.check())
  },
  auth (to, from, next) {
    console.log('the val is' + user.check())
    console.log(to)
    console.log(from)
    next(user.check() ? true : {
      path: '/login',
      query: {
        redirect: to.name}
    })
  }
}
