const express = require('express');
const router = express.Router();
const newsControllers = require('../controllers/News');

router.get('/', newsControllers.getAllNews);
router.post('/add/', newsControllers.addNews);
router.put('/update/:id', newsControllers.updateNews);
router.delete('/remove/:id', newsControllers.removeNews);


module.exports = router;