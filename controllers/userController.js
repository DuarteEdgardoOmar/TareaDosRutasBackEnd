const {Zapatilla} = require('../models/zapatilla.js')



const userSaludoCB = (req, res) =>
 {

    res.status(200).send(`Hola ${req.params.nombre} - ${req.params.apellido}`)
}

const userAltaCB = (req,res)=>
{
    res.status(201).json({
        "nombre": req.body.nombre,
        "status": "success"
    })
}

const listarZapatillas = async (req,res)=>{

    /**metodo de mongoose para buscar en la bd */
    const zapatillas = await Zapatilla.find()

    res.status(200).json(zapatillas)
}

const crearZapatilla = async (req,res)=>{
    try {
        /**creamos nuevo modelo de zapatilla
         * se usa como si fuese una instancia de clase
         * se pasa req.body porque recibiremos los datos
         * por body
         */
        const zapatillaAdd = new Zapatilla(req.body)
        
        /**metodo mongoDB para guardar */
        await zapatillaAdd.save();

        /**muestra en pantalla el obj guardado */
        res.status(201).json(zapatillaAdd)
    } catch (error) {
        res.status(501).json({msg : 'error al guardar producto, verifique...', error})
    }
}

module.exports = {userSaludoCB, userAltaCB, listarZapatillas, crearZapatilla}