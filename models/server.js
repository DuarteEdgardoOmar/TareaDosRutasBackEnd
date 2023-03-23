
const app = require('../app')
const port = 3000

//Ejecutar el servidor-----------------------------------------------------------------------------
app.listen(port, () => {
    console.log(`El servidor esta ejecutandose en el puerto ${port}`)
})