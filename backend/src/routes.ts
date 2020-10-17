import { Router } from 'express';
import UploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanageController'
import multer from 'multer'

const routes = Router()
const upload = multer(UploadConfig)

//MVC == Model  --> representatividade de um dado | View  --> Visualização pro Front-end| Contollers  --> lógica das nossas rotas

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images'), OrphanagesController.create)



export default routes;