import { request } from 'express';
import multer from 'multer';
//Sempre que usar pastas no Node 
import path from 'path'

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname,  '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            const fileName =  `${Date.now()}-${file.originalname})`;

            cb(null, fileName)
        }
    })
}