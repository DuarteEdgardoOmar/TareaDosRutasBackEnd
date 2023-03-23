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

module.exports = {userSaludoCB, userAltaCB}