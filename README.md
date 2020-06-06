# VUE TEMPLATE

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run Project with Express
```
npm run start
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Structure 
```markdown
  src
  |-- assets
  |-- components
  |-- |-- Base/
  |-- |-- Component A
  |-- |-- Component B
  |-- directives
  |-- events
  |-- layout
  |-- mixins
  |-- pages
  |-- plugins
  |-- router
  |-- store
  |-- utils
  ```

### Custom element

```vue
import vueCustomElement from "vue-custom-element";

Vue.config.ignoredElements = [
  "base-modal"
]

Vue.customElement("base-modal", BaseModal);
```

### Single page app

```vue
import Router from 'vue-router'

const router = new Router({})

new Vue({
  router,
  render: h => h(App)
}).$mount('#hello')
```