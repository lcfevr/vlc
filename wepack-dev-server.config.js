/**
 * Created by admin on 2017/4/21.
 */
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

var compiler = webpack({

});
var server = new WebpackDevServer(compiler, {

    contentBase: "./dist",
    hot: true,
    historyApiFallback: false,
    compress: true,
    proxy: {
        // "**": "http://localhost:8080"
    },
    setup: function(app) {

    },
    staticOptions: {
    },
    quiet: false,
    noInfo: false,
    lazy: true,
    filename: "bundle.js",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    publicPath: "",
    headers: { "X-Custom-Header": "yes" },
    stats: { colors: true }
});
server.listen(8080, "localhost", function() {
    console.log('Listen:server is running in 8080')
});
