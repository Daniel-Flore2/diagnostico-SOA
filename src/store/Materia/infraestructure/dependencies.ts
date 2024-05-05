import { GetMateriasUseCase } from "../application/getMateriasUseCase";
import { MysqlMateriaRepository } from "../infraestructure/mysqlMateriaRepository";
import { GetMateriasController } from "./controllers/getMateriasController";
import { RegisterMateriaUseCase } from "../application/registerMateriaUseCase";
import { RegisterMateriaController } from "./controllers/registerMateriaCoontroller";

const materiaRepository = new MysqlMateriaRepository();
const registerMateriaUseCase = new RegisterMateriaUseCase(materiaRepository);
const registerMateriaController = new RegisterMateriaController(registerMateriaUseCase);

const getMateriasUseCase = new GetMateriasUseCase(materiaRepository);
const getMateriasController = new GetMateriasController(getMateriasUseCase);

export {
  registerMateriaController,
  getMateriasController
};

