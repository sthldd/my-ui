var webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = function (config) {
    config.set({
        frameworks: ['karma-sinon-chai'],

        files: [
            'tests/**/*.spec.js'
        ],

        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        reporters: ['spec'],
        autoWatch: true,

        browsers: ['ChromeHeadless']
    })
}