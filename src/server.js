const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://gabriela:gabriela@cluster0-02bgf.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

// GET, POST, PUT, DELETE
// GET BUSCAR INFORMAÇÃO DA API
// POST CRIAR ALGUM REGISTRO
// PUT EDITAR
// DELETE DELETAR
server.listen(3333);