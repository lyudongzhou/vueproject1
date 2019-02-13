﻿module.exports = {
    "presets": [
        ["env", {
            "modules": false,
            "targets": {
                "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
            }
        }],
        // ["es2015", { "modules": false }],   //需要先cnpm install babel-preset-es2015 --save-dev ,下载es5的babel转码插件，些处是多余，已配置env
        // "stage-2"
    ],
    "plugins": [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}
