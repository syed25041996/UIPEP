const Products = require('../models/prodcutModel.js')

const {getPostData} = require('../utils/utils.js')

async function getAll(req, res){
    try {
        const prodcuts = await Products.findAll()
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify(prodcuts))
    } catch (error) {
        console.log(error)
    }
}

async function getOne(req, res, id){
    try {
        const product = await Products.findById(id)

        if(!product){
            res.writeHead(400, {'Content-type': 'application/json'})
            res.end(JSON.stringify({"message": "prodcut not found"}))
        }else{
            res.writeHead(200, {'Content-type': 'application/json'})
            res.end(JSON.stringify(product))
        }
    } catch (error) {
        console.log(error)
    }
}


async function createProduct(req, res) {
    try {
        const body = await getPostData(req)

        const { title, description, price } = JSON.parse(body)

        const product = {
            title,
            description,
            price
        }

        const newProduct = await Products.create(product)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newProduct))  

    } catch (error) {
        console.log(error)
    }
}


async function updateProduct(req, res, id) {
    try {
        const product = await Products.findById(id)

        if(!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            const body = await getPostData(req)

            const { title, description, price } = JSON.parse(body)

            const productData = {
                title: title || product.name,
                description: description || product.description,
                price: price || product.price
            }

            const updProduct = await Products.update(id, productData)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(updProduct)) 
        }
 

    } catch (error) {
        console.log(error)
    }
}

async function deleteProduct(req, res, id) {
    try {
        const product = await Products.findById(id)

        if(!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            await Products.remove(id)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `Product ${id} removed` }))
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAll,
    getOne,
    createProduct,
    updateProduct,
    deleteProduct
}