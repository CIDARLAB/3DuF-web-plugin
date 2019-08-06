const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'var',
        library: 'ThreeDuFPlugin'
    }
};


// const path = require('path');

// module.exports = {
//     entry: './src/main.js',
//     output: {
//         filename: './dist/bundle.js'
//     },
//     module: {
//         test: /\.js$/, // include .js files
//         enforce: "pre", // preload the jshint loader
//         exclude: /node_modules/,
//         use: [{
//             loader: "jshint-loader",
//             // more options in the optional jshint object
//             options: { // ⬅ formally jshint property
//                 camelcase: true,
//                 emitErrors: false,
//                 failOnHint: false
//             }
//         }]
//     }
// };