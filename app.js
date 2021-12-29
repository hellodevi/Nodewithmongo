const MongoClient = require('mongodb').MongoClient;
const circulationRepo = require('./repos/circulationRepo');
const data = require('./zips.json');

const url = 'mongodb://localhost:27017';
const dbName = 'circulation';  

async function main(){
    const client = new MongoClient(url);
    await client.connect();
    const results= await circulationRepo.loadData(data);
    const admin = client.db(dbName).admin();
   // let a =await admin.serverStatus();
    let b = await admin.listDatabases();
    console.log(results);
    console.log(b);
}


main();