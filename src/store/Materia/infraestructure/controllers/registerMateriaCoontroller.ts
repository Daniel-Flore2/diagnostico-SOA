import { Request, Response } from 'express';
import { RegisterMateriaUseCase } from '../../application/registerMateriaUseCase';
import { Materia } from '../../domain/materia';

export class RegisterMateriaController {
  constructor(readonly registerMateriaUseCase: RegisterMateriaUseCase) {}

  async register(req: Request, res: Response) {
    try {
      const { id, nombre, alumnos } = req.body;

      const materia: Materia = {
        id: id,
        nombre: nombre,
        alumnos: alumnos,
      };

      const newMateria = await this.registerMateriaUseCase.run(materia);

      if (newMateria) {
        return res.status(201).send({
          status: 'success',
          data: {
            message: 'Materia registrada con éxito',
            materia: newMateria,
          },
        });
      } else {
        return res.status(500).send({
          status: 'error',
          message: 'Ocurrió un error al registrar la materia',
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: 'error',
        message: 'Ocurrió un error al registrar la materia',
      });
    }
  }
}
