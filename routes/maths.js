const express = require('express')
const routerMaths = express.Router()
const mathsCB = require('../controllers/mathsController')


//Item 2-------------------------------------------------------------------------------------------
/**Crear una ruta “dividir” la cual reciba dos parámetros (ruta parametrizada) divisor y dividendo, la misma tiene que devolver un res.json({error: "no se puede dividir por cero"}) si el usuario ingresa un 0, si no es el caso devolver res.json({resultado}). */

//para divisor  =0 http://localhost:3000/maths/dividir20/0
//para divisor !=0 http://localhost:3000/maths/dividir20/2
routerMaths.get('/dividir:dividendo/:divisor', mathsCB.dividir)


//Item 3-------------------------------------------------------------------------------------------
/**Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condición de que no se puedan enviar números menores que cero, y el resultado se debe devolver por medio de un res.json({resultado}). */

//para num<0 ==> http://localhost:3000/maths/suma/-1/15
//para num>0 ==> http://localhost:3000/maths/suma/111/15
routerMaths.get('/suma/:num1/:num2', mathsCB.sumar)

//Item 4-------------------------------------------------------------------------------------------
/**Crear una ruta que reciba un numero (ruta con query) si el número es impar debe devolver un res.send("no autorizado") , y si el número es par debe devolver res.send("autorizado").
 */
//para codigo impar ==> http://localhost:3000/maths/autorizados?codigo=1
//para codigo par ===>  http://localhost:3000/maths/autorizados?codigo=22
routerMaths.get('/autorizados', mathsCB.validar)

module.exports = routerMaths