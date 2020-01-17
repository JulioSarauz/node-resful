const express = require('express');
const Producto = require('../models/productos')
const app = express();

app.get('/productos', function(req, res) {
    res.json("get Producto");
});


app.post('/productos', function(req, res) {
    let body = req.body;

    let producto = new Producto({
        nombre: body.nom,
        precio_uni: body.p,
        categoria: body.c,
        disponible: body.d,
        usuario: body.u

    });

    producto.save((err, productoDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            producto: productoDB
        });
    });

});






module.exports = app;