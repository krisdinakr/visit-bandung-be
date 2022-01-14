import path from 'path';
import multer from 'multer';

const diskStorage = multer.diskStorage({
  destination: path.join(__dirname, '../../storage'),
});

const upload = multer({
  storage: diskStorage,
}).array('images');

export default upload;
