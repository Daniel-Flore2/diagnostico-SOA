import { Request, Response } from 'express';
import { RegisterTutorUseCase } from '../../application/registerTutorUseCase';
import { Tutor } from '../../domain/tutor';

export class RegisterTutorController {
  constructor(readonly registerTutorUseCase: RegisterTutorUseCase) {}

  async registerTutor(req: Request, res: Response) {
    try {
      const { id, nombre, alumnos } = req.body;

      const tutor: Tutor = {
        id: id,
        nombre: nombre,
        alumnos: alumnos,
      };

      const newTutor = await this.registerTutorUseCase.run(tutor);

      if (newTutor) {
        return res.status(201).send({
          status: 'success',
          data: {
            message: 'Tutor registrado con éxito',
            tutor: newTutor,
          },
        });
      } else {
        return res.status(500).send({
          status: 'error',
          message: 'Ocurrió un error al registrar el tutor',
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: 'error',
        message: 'Ocurrió un error al registrar el tutor',
      });
    }
  }
}
