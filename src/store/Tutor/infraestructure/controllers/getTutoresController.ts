import { Request, Response } from 'express';
import { GetTutorsUseCase } from '../../application/getTutoresUseCase';
import { Tutor } from '../../domain/tutor';

export class GetTutoresController {
  constructor(readonly getTutorsUseCase: GetTutorsUseCase) {}

  async getTutores(req: Request, res: Response) {
    try {
      const tutores = await this.getTutorsUseCase.run();
      if (tutores !== null && tutores.length > 0) {
        return res.status(200).send({
          status: 'success',
          data: {
            list: tutores,
          },
        });
      } else {
        return res.status(204).send({
          status: 'ok',
          message: 'No se encontraron tutores',
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: 'error',
        message: 'Ocurrió un error al obtener los tutores',
      });
    }
  }
}
