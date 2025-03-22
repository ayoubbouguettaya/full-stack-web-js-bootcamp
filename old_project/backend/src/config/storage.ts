import multer from 'multer'
import {join} from "path"
import { publicDirectory } from '..';

const storageConfig = multer.diskStorage({
  destination: (req: any, file, cb) => {
    cb(null, join(publicDirectory,"products") );
  },
  filename: (req: any, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;

    req.fileName = fileName;

    cb(null, fileName);
  },
});

export const upload = multer({ storage: storageConfig });

