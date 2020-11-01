import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const filename = `${Date.now()}-${file.originalname.split('').filter(e => e.trim().length).join('')}`;

      cb(null, filename);
    },
  })
};