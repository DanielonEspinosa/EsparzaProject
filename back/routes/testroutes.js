const express = require('express');
const path = require('path');
const app = express();


app.get('/captura', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/captura.html'));
});

app.get('/consulta', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/consulta.html'));
});

app.post('/about', (req, res) => {
    res.send("Post request received");
});

app.put('/test', (req, res) => {
    res.send("put request received");
});

app.delete('/dlit', (req, res) => {
    res.send("delete request received");
});

module.exports = app;