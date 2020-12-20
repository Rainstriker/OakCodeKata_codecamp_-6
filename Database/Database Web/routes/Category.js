const express = require('express');
const router = express.Router();
const categoryControllers = require('../controllers/Category');

router.get('/', categoryControllers.getAllCategory);
router.post('/add/', categoryControllers.addCategory);
router.put('/update/:id', categoryControllers.updateCategory);
router.delete('/remove/:id', categoryControllers.removeCategory);


module.exports = router;