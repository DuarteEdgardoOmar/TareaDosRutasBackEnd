
const app = require('../app')

require('dotenv').config

/**si no encuentra el puerto de .env
 * usa el puerto 3000
 */
const port = process.env.PORT || 3000
//Ejecutar el servidor-----------------------------------------------------------------------------
app.listen(port, () => {
    console.log(`El servidor esta ejecutandose en el puerto ${port}`)
})