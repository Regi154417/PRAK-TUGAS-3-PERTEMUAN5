const { configure } = require('quasar/wrappers')

module.exports = configure(function (ctx) {
  return {
    supportTS: false,

    boot: [],

    css: ['app.css'],

    extras: [
      'roboto-font',
      'material-icons' 
    ],

    build: {
      vueRouterMode: 'history'
    },

    devServer: {
      https: false,
      port: 8080,
      open: true 
    },

    framework: {
      config: {},
      plugins: []
    },

    animations: [],
    ssr: false,
    pwa: false,
    cordova: false,
    capacitor: false,
    bex: false
  }
})
