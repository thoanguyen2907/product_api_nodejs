const { getList, update, deleteById } = require("../services/product.services");

const getProductList = async (req, res) => {
let productList = await getList(); 
if(productList) {
    res.status(200).send(productList)
} else {
    res.status(400).send("NOT FOUND")
}
}

const getProductById = (req, res) => {
    let {id} = await req.params; 
    let product = await getProductById(id); 
    if(product) {
        res.status(200).send(product); 
    } else {
        res.status(401).send("NOT FOUND")
    }
} 

const createNewStudent = async (req, res) => {
    let student = await req.body;
    let newStudent = create(student); 
    if(newStudent) {
        res.status(200).send("Add a new product successfully !!")
    } else {
        res.send("Unsuccessful !!")
    }
}

const updateStudent = (req, res) => {
    let id = await req.params; 
    let {name, amount, price} = await req.body; 
    let updateProduct = update(id, name, amount, price); 
    if(updateProduct) {
        res.status(200).send("Update student")
    } else {
        res.send("NOT FOUND")
    }
}
const deleteStudent = async (req, res) => {
    let {id} = req.params; 
    let deletedStudent = deleteById(id); 
    if(deletedStudent) {
        res.status(200).send("UPdate student")
    } else {
        res.send("NOT FOUND")
    }
}

module.exports = {
    getProductList, 
    createNewStudent, 
    updateStudent, 
    getProductById, 
    deleteStudent
}