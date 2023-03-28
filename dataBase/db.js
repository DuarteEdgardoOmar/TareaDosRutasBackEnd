const mongoose = require('mongoose')
mongoose.set('strictQuery',true) //obligatorio desde version 7

/**para usar variables de entorno */
require('dotenv').config()

const connect = async () =>{
	try{
		await mongoose.connect(process.env.MONGO_CNN)
//reemplazar el username y el password por el creado en mongodb
		console.log('bd on')
	}catch{
		/**no pongo el error porque no hace falta
		 * sabemos que si falla es por ruta erronea
		 * usuario o pass erroneos
		 */
		console.log('fallo conexion con bd')
	}
}

module.exports = {connect}