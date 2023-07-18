const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();

app.use( express.static('public') );

app.listen(process.env.PORT, () => {
    console.log('Servidor escuchando en el puerto' + process.env.PORT);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

