const Product = require('../modules/product');
//const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('pages/product-list', {
            prods: products,
            title: 'All Products',
            path: '/products',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('pages/product-detail', {
            product: product,
            title: product.title,
            path: "/product"
        });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('pages/prove03', {
            products: products,
            title: 'Shop',
            path: '/'
        });
    });
}