const listCB =  (req, res)=>
{

    res.status(200).json(
        req.query
    )
}

module.exports = {listCB}