const express = require('express');

const router = express.Router();

const postCtrl = require('../controllers/postCtrl');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', postCtrl.createPost);
router.put('/:id', postCtrl.modifyPost);
router.delete('/:id', postCtrl.deletePost);
router.get('/:id', postCtrl.getOnePost);
router.get('/', postCtrl.getAllPost);

router.post('/:id/like', postCtrl.likeDislike);

module.exports = router;

