/**
 * Created by liang.shan on 2017/2/20.
 */
let Vue = require('vue')
let VueMaterial = require('vue-material')
Vue.use(VueMaterial)

/***
 * 配置所有主题
 * 更多可选颜色：https://material.io/guidelines/style/color.html
 */
Vue.material.registerTheme({
    default: {
        primary: 'blue',
        accent: 'white'
    },
    indigo: {
        primary: 'indigo',
        accent: 'white'
    },
    brown: {
        primary: 'brown',
        accent: 'white'
    },
    purple: {
        primary: 'purple',
        accent: 'white'
    },
    orange: {
        primary: 'orange',
        accent: 'white'
    },
    blue: {
        primary: 'blue',
        accent: 'white'
    },
    green: {
        primary: 'green',
        accent: 'white',
        warning: 'white'
    },
    'light-blue': {
        primary: 'light-blue',
        accent: 'white'
    },
    teal: {
        primary: 'teal',
        accent: 'white'
    },
    'blue-grey': {
        primary: 'blue-grey',
        accent: 'white'
    },
    cyan: {
        primary: 'cyan',
        accent: 'white'
    },
    red: {
        primary: 'red',
        accent: 'white'
    },
    white: {
        primary: 'white',
        accent: 'black'
    },
    grey: {
        primary: 'grey',
        accent: 'black'
    },
    black: {
        primary: {
            color: 'grey',
            hue: 800
        },
        accent: 'white'
    }
})
