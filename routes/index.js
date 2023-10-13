const express = require('express');
const router = express.Router();
const indexController = require("../controllers/indexController")

const validarID = require('../middleware/validarID')
const {check} = require('express-validator');



router.get('/ver', indexController.lista)

router.post('/crear',[
    check('brand').not().isEmpty().withMessage('el campo brand es obligatorio'),
    check('price').not().isEmpty().withMessage('el campo price es obligatorio'),
    check('stock').not().isEmpty().withMessage('el campo stock es obligatorio'),
    check('model').not().isEmpty().withMessage('el campo model es obligatorio'),
    check('category').not().isEmpty().withMessage('el campo category es obligatorio'),
    check('year').not().isEmpty().withMessage('el campo year es obligatorio')
], indexController.crear)

router.put('/editar/:id', validarID, [
    check('brand').not().isEmpty().withMessage('el campo brand es obligatorio'),
    check('price').not().isEmpty().withMessage('el campo price es obligatorio'),
    check('stock').not().isEmpty().withMessage('el campo stock es obligatorio'),
    check('model').not().isEmpty().withMessage('el campo model es obligatorio'),
    check('category').not().isEmpty().withMessage('el campo category es obligatorio'),
    check('year').not().isEmpty().withMessage('el campo year es obligatorio')
], indexController.editar)


router.delete('/borrar/:id', validarID, indexController.eliminar)



module.exports = router