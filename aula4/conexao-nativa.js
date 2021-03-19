const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';
const client = new MongoClient(url, { useUnifiedTopology: true });
// Use connect method to connect to the server
client.connect( function(err) {
    //assert.equal(null, err);
  
    if(err){
      console.log('BUGG =======================');
    }else{
      console.log('Connected successfully to server');
    }
  
    const db = client.db(dbName);
  
    client.close();
  }
);