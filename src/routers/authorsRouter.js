const express = require('express');
const router = express.Router();

const {insertAuthorController, fetchAuthorController, fetchOneAuthorController, updateAuthorController, deleteAuthorController} = require("../controllers/authorController")

router.get('/', fetchAuthorController)
router.get('/:id', fetchOneAuthorController)
router.post('/', insertAuthorController)
router.put('/:id', updateAuthorController)
router.delete('/:id', deleteAuthorController)

module.exports = router;
