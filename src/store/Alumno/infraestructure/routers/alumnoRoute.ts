import express from 'express';
import { getAlumnosController, registerAlumnoController } from '../dependencies';

const router = express.Router();

// Ruta para obtener todos los alumnos
router.get('/alumnos', async (req, res) => {
    await getAlumnosController.getAlumnos(req, res);
});

// Ruta para registrar un nuevo alumno
router.post('/alumnos', async (req, res) => {
    await registerAlumnoController.register(req, res);
});

export default router;
