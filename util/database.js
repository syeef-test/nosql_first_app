const { result } = require('lodash');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db ;

const mongoConnect = (callback) => {
  // MongoClient.connect('mongodb+srv://kazi:nkdhpwuqDfSvOIQc@cluster0.qeakjte.mongodb.net/?retryWrites=true&w=majority').then(client=>{
  //   console.log("succesful connection");
  //   _db = client.db('test');
  //   callback();
  // }).catch(err=>{
  //   console.log(err);
  //   throw err;
  // });
  MongoClient.connect('mongodb+srv://kazi:nkdhpwuqDfSvOIQc@cluster0.qeakjte.mongodb.net/shop?retryWrites=true&w=majority').then(client=>{
    console.log("succesful connection");
    _db = client.db();
    callback();
  }).catch(err=>{
    console.log(err);
    throw err;
  });
}

const getDb = () =>{
  if(_db){
    return _db;
  }
  throw 'No Database Found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
