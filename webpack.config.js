const path = require('path');
const webpack=require('webpack');


module.exports={
    entry:'./src/index.js'    ,
    devtool:'inline-source-map',

    devServer:{
        contentBase:'./dist',
        hot:true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
        
        /* new HtmlWebpackPlugin({
          title: 'Development'
        }) */
      ],


    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
    },
   
    resolve: {
        extensions: ['*', '.js', '.jsx']
      },

    mode:'development',

    module: {
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpe?g|gif|woff|woff2)$/,
                include:/images/,
                exclude:/node_modules/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.(eot|ttf|woff)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.txt$/,
                use:[
                    'raw-loader'
                ]
            },
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:[{
                    loader:'babel-loader',
                options:{
                    "presets": [
                        "@babel/preset-env",
                        "@babel/preset-react"
                      ]
                }}
                ]
            },
            {
                test: /\.json$/,
                use: [ 'json-loader']
            },
            {
                test: /\.ttf$/,
                use: [
                  {
                    loader: 'ttf-loader',
                    options: {
                      name: './font/[hash].[ext]',
                    },
                  },
                ]
            }
        ]
    }
};