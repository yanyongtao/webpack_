module.exports={
    entry:'./entry.js',
    output:{
        filename:'./bundle.js'
    },
    devtool:'source-map',
    devserver:{
        port:8088,
        inline:true
    },
    module:{
        loaders:[{
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },{
                test:/\.js$/,
                loader:'babel-loader!react-hot-loader',
                exclude:/node_modules/
            }]
    },
    resolve:{
        "extensions":['','.js','.css','.json','.jsx']
    }
};
