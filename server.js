let bodyParser = require('body-parser');
let cors = require('cors');
let express = require('express'),
    app = express(),
    port = process.env.PORT || '3333',
    hostname = process.env.HOSTNAME || '127.0.0.1';

// const mysql = require('mysql');

let routes = require('./app/routes/app.routes.js');
let db = require('./app/db')


app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app); //register the route


// db connect and server start
db.connect((err) => {
    if (err) {
        throw err,
            console.log('Error Datebase unavailable');
    }
    console.log('Database successfully connected..')
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});