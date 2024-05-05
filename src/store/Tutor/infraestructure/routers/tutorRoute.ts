import express from 'express';
import { getTutoresController,
    registerTutorController
 } from '../dependencies';

const router = express.Router();

// Ruta para obtener todos los materia
router.get('/tutores', async (req, res) => {
    await getTutoresController.getTutores(req, res);
});

// Ruta para registrar un nuevo alumno
router.post('/tutor', async (req, res) => {
    await registerTutorController.registerTutor(req, res);
});

export default router;
