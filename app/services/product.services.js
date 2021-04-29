let productList = [

    {
        id: 1,
        name: "iPhone", 
        price: 1000, 
        amount: 500
    }, 
    {
        id: 2, 
        name: "iPad",
        price: 300, 
        amount: 2000
    }, 
    {
        id: 3, 
        name: "Macbook M1", 
        price: 2500,
        amount: 3000
    }
]; 

const getList = () => {
    if(productList) {
        return productList
    } else {
        return false
    }
}
const getDetail = async(id) => {
    let product = await productList.find(item => item.id == id); 
    if(product) {
        return product
    } else {
        return false; 
    }
}
const create = async (product) => {
    let newProduct = await {...product, id: Math.floor(Math.random()) * 100}; 
    if(newProduct) {
        productList = [...productList, product]; 
    }
    return newProduct; 
}

const update = async (id, name, amount, price) => {
    let index = productList.findIndex(item => item.id == id); 
    if(index !== -1){
        let oldProduct = productList[index]; 
        let updatedProduct = {...oldProduct, name, amount, price}; 
        productList[index] = updatedProduct; 
        return updatedProduct
    } else {
        return false; 
    }
} 
const deleteById = async (id) => {
    let index = await productList.findIndex(item => item.id == id);
    if(index !== -1){
        productList.splice(index, 1); 
        return productList[index]; 
    } else {
        return true; 
    }
}

module.exports = {
    getList, 
    getDetail, 
    create, 
    update,
    deleteById
}

