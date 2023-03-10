const ctx = require.context('../components', true, /\.vue$/)

// 以字母Al开头命名的自动注册为全局组件，无需引入可直接使用
export default (app) => {
  ctx.keys().forEach(row => {
    if (/.*Al.*/.test(row) && !(/components/.test(row))) {
      const component = ctx(row).default
      app.component(
        component.name,
        component
      )
    }
  })
}