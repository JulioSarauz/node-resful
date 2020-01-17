const express = require('express');
const Categoria = require('../models/categoria')
const app = express();

app.get('/categoria', function(req, res) {
    res.json("get Categoria");
});


app.post('/categoria', function(req, res) {
    let body = req.body;

    let categoria = new Categoria({
        nombre: body.n,
        usuario: body.u

    });

    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });

});





module.exports = app;