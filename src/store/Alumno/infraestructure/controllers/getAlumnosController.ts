import { GetAlumnosUseCase } from "../../application/getAlumnosUseCase";
import { Alumno } from "../../domain/alumno";

export class GetAlumnosController {
  constructor(readonly getAlumnosUseCase: GetAlumnosUseCase) {}

  async getAlumnos(req: Request, res: Response) {
    try {
      const getAll = await this.getAlumnosUseCase.run();
      if (getAll) {
        return res.status(200).send({
          status: "success",
          data: {
            list: getAll,
          },
        });
      } else {
        return res.status(204).send({
          status: "ok",
          message: "Content not found",
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: "error",
        message: "An error occurred while listing the users.",
      });
    }
  }
}
