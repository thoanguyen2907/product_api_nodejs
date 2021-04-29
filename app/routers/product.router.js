const express = require('express');
const productRouter = express.Router(); 


productRouter.get('/', (req, res)=>{
    res.send("get list of products"); 

}); 

productRouter.get('/:id', (req, res)=>{
    res.send("get product detail"); 

}); 

productRouter.post('/', (req, res)=>{
    res.send("add new product"); 

}); 

productRouter.put('/:id', (req, res)=>{
    res.send("update a product"); 

}); 

productRouter.delete('/:id', (req, res)=>{
    res.send("delete a product"); 

}); 

module.exports = {
    productRouter
}