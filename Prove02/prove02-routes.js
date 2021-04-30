const express = require('express');


const router = express.Router();

const books = [];


router.get('/', (req, res, next) => {
    res.render('prove02', { pageTitle: 'Prove02', path: '/prove02', novels: books });
});

router.post('/getBooks', (req, res, next) => {
    books.push({ title: req.body.title, summary: req.body.summary });
    //console.log(books);
    res.redirect('/');
});

module.exports = router;