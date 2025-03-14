const express = require('express');
const router = express.Router();
const data = require('../posts');

//middleware
router.use(express.static('public'));

//index
router.get('/', (req, res) => {
    
});

//show
router.get('/:slug', (req, res) => {
    
});

//store
router.post('/', (req, res) => {
    
});

//update
router.put('/:slug', (req, res) => {
    
});

//modify
router.patch('/:slug', (req, res) => {
    
});

//delete
router.delete('/:slug', (req, res) => {
    
});

module.exports = router;