const express = require('express');
const router = express.Router();

const {insertBookController, fetchBookController, fetchOneBookController, updateBookController, deleteBookController} = require("../controllers/bookController")

router.get('/', fetchBookController)
router.get('/:id', fetchOneBookController)
router.post('/', insertBookController)
router.put('/:id', updateBookController)
router.delete('/:id', deleteBookController)

module.exports = router;
