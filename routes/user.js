const express = require('express')
const routerUser = express.Router()
const {userSaludoCB , userAltaCB} = require('../controllers/userController')

//Item 1-------------------------------------------------------------------------------------------
//Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) y devuelva por un res.send un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).

//respuessta=>http://localhost:3000/user/saludo:Omar/Duarte
routerUser.get('/saludo:nombre/:apellido', userSaludoCB)

//http://localhost:3000/user/usuarioNuevo
routerUser.post('/usuarioNuevo', userAltaCB)

module.exports = routerUser