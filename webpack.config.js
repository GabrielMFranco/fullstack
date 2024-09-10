const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./aulas-js/modulo03/Burdlers-webpack/src/js/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    plugins:[new HTMLWebpackPlugin()],
    modules: {
        rules:[
            {
                test: /\.css/i,
                use:["syle-loader", "css-loader"],
                exclude:"/node_modules",
            },
            {
                test:/\.js$/i,
                exclude:"/node_modules",
                use:{
                    loader:"babel-loader",
                    options: {
                        presets: [["@babel/preset-env"], {targets: "defaults"}]
                    }
                }
            }
        ],
    },
}