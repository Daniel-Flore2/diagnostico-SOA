import { Alumno } from "../domain/alumno";
import { AlumnoRepository } from "../domain/alumnoRepository";


export class GetAlumnosUseCase{
    constructor(readonly alumnoRepository: AlumnoRepository){}

    async run():Promise<Alumno[] | null>{
        try {
            const getAll = await this.alumnoRepository.getAlumnos();
            console.log(getAll)
            return getAll;
            
        } catch (error) {
            return null;
        }
    }
}