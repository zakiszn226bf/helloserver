const express = require('express');
const fs = require("fs");
const path = require("path");

const app = express();
app.get('/hello', (req, res) => {
    res.send('Serveur Express fonctionne sur Termux 🚀');
});

app.get('/img', (req, res) => {
    res.sendFile(path.join(__dirname, 'img.png'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Serveur lancé sur le port ' + PORT);
});