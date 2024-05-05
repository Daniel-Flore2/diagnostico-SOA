import { MysqlTutorRepository } from "../infraestructure/mysqlTutorRepository";
import { GetTutorsUseCase } from "../application/getTutoresUseCase";
import { RegisterTutorUseCase } from "../application/registerTutorUseCase";
import { GetTutoresController } from "./controllers/getTutoresController";
import { RegisterTutorController } from "./controllers/registerTutorController";

const tutorRepository = new MysqlTutorRepository();
const getTutorsUseCase = new GetTutorsUseCase(tutorRepository);
const registerTutorUseCase = new RegisterTutorUseCase(tutorRepository);
const getTutoresController = new GetTutoresController(getTutorsUseCase);
const registerTutorController = new RegisterTutorController(registerTutorUseCase);

export {
  getTutoresController,
  registerTutorController
};
