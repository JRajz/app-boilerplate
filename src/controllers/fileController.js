const { FileService } = require('../services');
const authenticateToken = require('../middlewares/authMiddleware');

// eslint-disable-next-line consistent-return
exports.uploadFile = async (req, res, next) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    const { file } = req.files;

    // Call the file service to handle the upload
    const filePath = await FileService.uploadFile(file);

    res.status(200).json({ message: 'File uploaded successfully', filePath });
  } catch (error) {
    next(error);
  }
};

// Apply authentication middleware to the file upload API
exports.uploadFileWithAuth = [authenticateToken, exports.uploadFile];
