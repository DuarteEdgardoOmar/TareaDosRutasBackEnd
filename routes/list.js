const express = require('express')
const routerList = express.Router()
const {listCB} = require('../controllers/listController')

//Item 5-------------------------------------------------------------------------------------------
/**Crear una ruta “lista de compras” (ruta con query) que devuelva un objeto con 5 productos, se debe usar res.json({objeto}). */

// http://localhost:3000/list/listaDeCompras/?Prod-1=ProdUno&Prod-2=ProdDos&Prod-3=ProdTres&Prod-4=ProdCuatro&Prod-5=ProdCinco
routerList.get('/listaDeCompras', listCB)


module.exports = routerList