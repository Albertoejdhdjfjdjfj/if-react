const path=require('path');
const autoprefixer=require('autoprefixer')
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
     entry:'./src/index.js',
     output:{
          path: path.resolve(__dirname,'dist'),
          filename:"boundle[hash].js",
          chunkFilename:"[id].js",
          publicPath:""
     },
     resolve:{
          extensions :['.js','.jsx'],
     },
     module:{
          rules:[
               {
                    test:/\.(js|jsx)$/,
                    loader:"babel-loader",
                    exclude:/node_modules/
               },
               {
                    test:/\.css$/,
                    exclude:/node_modules/,
                    use:[
                         {loader:"style-loader"},
                         {loader:"css-loader"}
                    ]
               },
               {
                    test:/\.s[ac]ss$/i,
                    use:[
                         'style-loader',
                         'css-loader',
                         'sass-loader',
                    ],
               },
               {
                    test:/\.(png|jpg|svg|gif)$/,
                    use:['file-loader']
               }
          ]
     },
     plugins:[
          new HtmlWebpackPlugin({
               template:__dirname+'/public/index.html',
               filename: 'index.html',
               inject:'body',
          })
     ]
}