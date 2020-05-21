const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.index);
    app.get('/api/products/:id', ProductController.getProduct);
    app.post('/api/products/create', ProductController.create);
    app.put('/api/products/update/:id', ProductController.updateProduct);
    app.delete('/api/products/delete/:id', ProductController.deleteProduct);
}

