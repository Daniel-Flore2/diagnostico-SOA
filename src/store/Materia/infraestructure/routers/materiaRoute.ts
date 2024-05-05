import express from 'express';
import { registerMateriaController,
    getMateriasController
 } from '../dependencies';

const router = express.Router();

// Ruta para obtener todos los materia
router.get('/materias', async (req, res) => {
    await getMateriasController.getMaterias(req, res);
});

// Ruta para registrar un nuevo alumno
router.post('/materia', async (req, res) => {
    await registerMateriaController.register(req, res);
});

export default router;
