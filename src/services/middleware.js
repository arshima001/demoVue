import user from './auth'
export default {
  auth (to, from, next) {
    console.log('the val is' + user.check())
    console.log(to)
    console.log(from)
    next(user.check() != null ? true : {
      path: '/login'
    })
  }
}
