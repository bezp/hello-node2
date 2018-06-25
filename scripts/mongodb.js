

const mongodb = require('mongodb');

const dbClient  = mongodb.MongoClient;

dbClient.connect('mongodb://localhost:27017', (error, db) => {
  if (error) {
    console.error('database dwn...');
    return;
  }
  console.log('daaaaata base created');
  db.close();
});


