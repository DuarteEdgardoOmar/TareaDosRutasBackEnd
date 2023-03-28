let express = require('express')
let app = express()
const {connect} = require('./dataBase/db.js')

const user = require ('./routes/user')
const maths = require ('./routes/maths')
const list = require ('./routes/list')

/**Middelware que permite recibir y enviar obj de tipo json */
app.use(express.json())

app.use('/user',user)
app.use('/maths', maths)
app.use('/list',list)

/**se ejecuta la funcion de conexion a la bd que esta en el archivo database/db.js */
connect()

module.exports = app







