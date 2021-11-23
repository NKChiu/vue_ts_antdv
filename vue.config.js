module.exports = {
    css:{
        loaderOptions:{
            less:{
                lessOptions:{
                    modifyVars:{
                        'hack': `true; @import "~@/assets/less/base.less";`
                    },
                    javascriptEnabled: true
                }
            }
        }
    },
    devServer : {
        port: 8083,
        proxy: {
            '/api':{
                target : 'http://localhost:8089',
                ws: true,
                changeOrigin : true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}