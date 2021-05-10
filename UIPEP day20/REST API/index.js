const http = require('http')
const {getAll, getOne, createProduct, updateProduct, deleteProduct} = require('./controllers/productController.js')

const server =  http.createServer((req,res) => {

    if (req.url === '/products' && req.method === 'GET'){
        getAll(req, res)
    }else if(req.url.match(/\/products\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[2]
        getOne(req,res, id)
    }else if(req.url === '/products' && req.method === 'POST'){
        createProduct(req, res)
    }else if(req.url.match(/\/products\/\w+/) && req.method === 'PUT') {
        const id = req.url.split('/')[2]
        updateProduct(req, res, id)
    }else if(req.url.match(/\/products\/\w+/) && req.method === 'DELETE') {
        const id = req.url.split('/')[2]
        deleteProduct(req, res, id)
    }else{
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify({"message": "Route not found"}))
    } 
})

const PORT = 5000

server.listen(PORT, () => console.log(`Server is running on ${PORT}`))