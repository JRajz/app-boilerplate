const router = require('express').Router();
const { FileController } = require('../controllers');

// Route for file upload (requires authentication)
router.post('/upload', FileController.uploadFileWithAuth);

module.exports = router;
