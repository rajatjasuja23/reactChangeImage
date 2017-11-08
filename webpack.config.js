var config = {
   entry: './main.js',
	
   output: {
      path:'/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 4556,
      historyApiFallback: true
   },
	
   module: {
      loaders: [
        { 
        test: /\.css$/, loader: "style-loader!css-loader" 
        },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react',"stage-0"]
            }
         }
      ]
   }
}

module.exports = config;