const path = require('path');

module.exports = {
    mode: "production",
    entry: path.join(__dirname, "../src/components/index.ts"),
    output: {
        filename: "../publish/[name].js",
        libraryTarget:'umd'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            loader: "ts-loader"
        }]
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    },
};
