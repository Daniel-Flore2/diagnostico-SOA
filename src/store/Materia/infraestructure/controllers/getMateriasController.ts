import { Request, Response } from 'express';
import { GetMateriasUseCase } from '../../application/getMateriasUseCase';

export class GetMateriasController {
  constructor(readonly getMateriasUseCase: GetMateriasUseCase) {}

  async getMaterias(req: Request, res: Response) {
    try {
      const materias = await this.getMateriasUseCase.run();
      if (materias !== null && materias.length > 0) {
        return res.status(200).send({
          status: 'success',
          data: {
            list: materias,
          },
        });
      } else {
        return res.status(204).send({
          status: 'ok',
          message: 'No se encontraron materias',
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: 'error',
        message: 'Ocurrió un error al listar las materias',
      });
    }
  }
}
