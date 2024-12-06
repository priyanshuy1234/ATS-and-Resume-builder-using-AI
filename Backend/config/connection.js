const mongoose = require('mongoose');

const connect = ()=>{
    const url = 'mongodb://localhost:27017';
    const dbname = 'rez';

    return mongoose.connect(url + '/' + dbname).then(()=>{
        console.log("Connected to Database");
    })
    .catch((err)=>{
        console.log(err);
        throw err;
    })
}


module.exports.connect = connect;

module.exports.get= function(){
    return mongoose.connection;
}