import { Materia } from "./materia";

export interface MateriaRepository {
    getMaterias():Promise<Materia[]|null>;
    registerMateria(materia:Materia):Promise<Materia|null>;

}