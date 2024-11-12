const express = require('express');
const cors = require('cors');
const { ConnectDB } = require('./ConnectDB/ConnectDB.js');


const app = express();
const port = 8400

ConnectDB()
    .then((Db) => Db && app.listen(port, () => console.log(`running at port ${port}`)))
    .catch(er => console.log(er))


app.use(express.json());
app.use(cors());

// app.listen(port, () => console.log(`running at port ${port}`))