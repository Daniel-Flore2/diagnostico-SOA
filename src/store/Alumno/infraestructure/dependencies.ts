import { GetAlumnosController } from "./controllers/getAlumnosController";
import { RegisterAlumnoController } from "./controllers/registerAlumnoController";
import { GetAlumnosUseCase } from "../application/getAlumnosUseCase";
import { RegisterAlumnoUseCase } from "../application/registerAlumnoUseCase";
import { MysqlAlumnoRepository } from "../infraestructure/mysqlAlumnoRepository";

const alumnoRepository = new MysqlAlumnoRepository();
const getAlumnosUseCase = new GetAlumnosUseCase(alumnoRepository);
const registerAlumnoUseCase = new RegisterAlumnoUseCase(alumnoRepository);

const getAlumnosController = new GetAlumnosController(getAlumnosUseCase);
const registerAlumnoController = new RegisterAlumnoController(registerAlumnoUseCase);

export {
  getAlumnosController,
  registerAlumnoController
};
