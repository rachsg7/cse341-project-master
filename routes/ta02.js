//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

const userArray = ['Peter', 'James', 'John'];

router.post('/addUser', (req, res, next) => {

});

router.get('/', (req, res, next) => {
    res.render('pages', {
        title: 'Team Activity 02',
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;