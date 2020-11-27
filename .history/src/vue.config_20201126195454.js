module.exports = {
    // 可以在此配置别名
    configureWebpack:{
        resolve:{
            alias:{
                // 比如
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/net',
                'common':'@/common',
            }
        }
    }
}