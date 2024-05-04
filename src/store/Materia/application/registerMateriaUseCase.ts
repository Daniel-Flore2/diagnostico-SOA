import { MateriaRepository } from "../domain/materiaRepository";
import { Materia} from "../domain/materia";

export class RegisterMateriaUseCase{
    constructor(readonly materiaRepository: MateriaRepository){}

    async run(materia: Materia): Promise<Materia|null>{
        try {
            const newMateria = {
                id: materia.id,
                nombre: materia.nombre,
                alumnos: materia.alumnos
            };
            return await this.materiaRepository.registerMateria(newMateria);
        } catch (error) {
            return null;
            
        }
    }
}