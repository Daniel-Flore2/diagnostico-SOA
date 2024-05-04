import {Alumno} from "../domain/alumno"
import {AlumnoRepository} from "../domain/alumnoRepository"

export class RegisterAlumnoUseCase{
    constructor(readonly alumnoRepository:AlumnoRepository){}

    async run(alumno: Alumno): Promise<Alumno|null> {
        try {
            const newAlumno = {
                id: alumno.id,
                nombre: alumno.nombre,
                materia: alumno.materia,
                tutor: alumno.tutor,
            };
            return await this.alumnoRepository.registerAlumno(newAlumno);

        } catch (error) {
            return null;
            
        }

    }

}
