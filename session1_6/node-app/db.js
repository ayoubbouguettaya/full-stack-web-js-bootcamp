const {Client} = require('pg') 


const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: 'password',
    database: 'postgres'
})


client.connect().then(() => {
    console.log('db connected successfuillly')
}).catch(error => {
    console.log('db not connected error: ',error)
})

module.exports = client;
