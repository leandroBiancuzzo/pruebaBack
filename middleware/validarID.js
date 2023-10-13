const {Product} = require('../models/productos');

module.exports = validarID = async (req, res, next) =>{
    try {
        const item = await Product.findById(req.params.id)
        if (item !== null) {
            next()
        } else {
            res.status(501).json({msg: 'el id es invalido'})
        }
    } catch (error) {
        res.status(501).json(error)
    }
}
