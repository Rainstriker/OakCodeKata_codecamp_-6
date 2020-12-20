const express = require('express');
const router = express.Router();
const imageControllers = require('../controllers/Image');

router.get('/', imageControllers.getAllImage);
router.post('/add/', imageControllers.addImage);
router.put('/update/:id', imageControllers.updateImage);
router.delete('/remove/:id', imageControllers.removeImage);


module.exports = router;