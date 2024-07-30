const path = require('path');

let name = 'index'

module.exports = {
  entry : `./src/${name}.tsx`,
  output : {
    path : path.resolve(__dirname,'dist'),
    filename : `${name}.bundle.js`
  },
  module : {
    rules : [
      {
        test: /\.css$/,
        use : ["style-loader","css-loader"], // 순서 중요 css가 읽히고 style이 읽혀야 한다. script화 이후 DOM으로 넣어주기
      },
      {
        test: /\.(js|jsx|ts|tsx)$/, // 자스인지 확인할 거야.
        use : 'babel-loader',
        exclude : /node_modules/
      },
      {
        test: /\.tsx$/, // 타스인지 확인할 거야.
        use : 'ts-loader',
        exclude : /node_modules/
      },
    ]
  },
  resolve : {
    extensions : ['.ts','.js','.tsx','.jsx','.css']
  }
}