
const mathsCB = 
{
    dividir (req, res)
    {
        let dividendo = parseInt(req.params.dividendo)
        console.log(dividendo)
    
        let divisor = parseInt(req.params.divisor)
        console.log(divisor)
    
        if (divisor === 0) {
            res.status(405).json({
                error: 'no se puede dividir por cero'
            })
        } else {
    
            let resultado = dividendo / divisor
    
            res.status(200).json({
                resultado
            })
    
            // res.send(`dividendo=${dividendo} y divisor=${divisor}`)
        }
    },
    sumar(req, res)
    {
        let num1 = parseInt(req.params.num1)
        let num2 = parseInt(req.params.num2)
    
        if(num1<0 || num2<0){
            res.status(405).send('los numeros brindados deben ser mayores a cero')
        }else{
            let resultado = num1 + num2
            res.status(200).json({
               resultado
            })
        }
    },
    validar(req,res)
    {
        let codigo = parseInt(req.query.codigo)
    
        if(codigo%2===0){
            /**si resto es cero el codigo es par */
            res.status(200).send('autorizado')
        }else{
            /**en cualquier otro caso no esta autorizado */
            res.status(403).send('no autorizado')
        }
    }
}

module.exports = mathsCB