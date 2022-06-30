const express = require("express");
const path = require("path");
const fs = require('fs');
const app = express();
const port = 8030;
const hostname = "127.0.0.1";
const dir_css = path.join(__dirname);
const dir_img = path.join(__dirname + "/assents");

app.use(express.static(dir_css));
app.use(express.static(dir_img));

//instalar:
app.listen(port, hostname, function () {
  console.log(`O Servidor foi Iniciado no Host ${hostname} e Porta ${port}`);
});

// main page (form)
app.get('/', function(req, res) {
    try {
        let formFile = fs.readFileSync('./index.html', 'utf8')
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.statusCode = 200;
        res.send(formFile);
    } catch (err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.statusCode = 503;
        res.send('Erro! Não foi possível abrir o formulario de notas: ' + err);
    }
});
