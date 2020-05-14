# vue-app

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#vueAlong
##官方文档地址：https://www.npmjs.com/package/vuex-along?activeTab=readme#%E7%94%A8%E6%B3%95

##简单用法
###npm install vuex-along --save
###yarn add vuex-along

###在store/index.js中引用
````
import VueXAlong from 'vuex-along'
const store = new Vuex.Store({
        state,
        getters,
        mutations,
        actions,
        plugins: [VueXAlong({
            justSession: true,
            session: {list: '',isFilter:true}  /*isFilter为true时需要过滤，list里需要写过滤的参数，如果为false时，list里可以为空
        })]
    }
);
````