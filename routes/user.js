const express = require('express')
const routerUser = express.Router()
const {userSaludoCB , userAltaCB, listarZapatillas, crearZapatilla} = require('../controllers/userController')

//Item 1-------------------------------------------------------------------------------------------
//Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) y devuelva por un res.send un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).

//respuessta=>http://localhost:8080/user/saludo:Omar/Duarte
routerUser.get('/saludo:nombre/:apellido', userSaludoCB)

//http://localhost:8080/user/usuarioNuevo
routerUser.post('/usuarioNuevo', userAltaCB)

//http://localhost:8080/user/zapatillas
routerUser.get('/zapatillas', listarZapatillas )

//http://localhost:8080/user/crearZapatilla
routerUser.get('/crearZapatilla', crearZapatilla )
module.exports = routerUser