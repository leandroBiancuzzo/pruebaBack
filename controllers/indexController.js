const {Product} = require('../models/productos')
const {validationResult} = require('express-validator');
const { json } = require('express');



class IndexController{
    
    async lista  (req, res) {
        const items = await Product.find();
        res.json({items})
    }

    async crear (req, res) {
       try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            const item = new Product(req.body);
            await item.save();
            res.status(201).json(item)
        } else {
            res.status(501).json(err)
        }
           
       } catch (error) {
            res.status(401).json(error)
       }
    }
    async editar (req, res) {
        
        try {
            const err = validationResult(req)

            if (err.isEmpty()) {
                await Product.findByIdAndUpdate(req.params.id,req.body);
                res.status(201).json({msg: 'el producto se actualizo id - ' + req.params.id})
            } else {
                res.json(err)
            }
            
            
        } catch (error) {
            res.json(error)
        }
    }

  
   async eliminar(req, res){
        await Product.findByIdAndDelete(req.params.id)
        res.json({msg:'el producto se borro con exito'})
    }

 
    

   
}



module.exports = new IndexController