import { Alumno } from "../domain/alumno";
import { AlumnoRepository } from "../domain/alumnoRepository";

export class GetalumnoUseCase {
    private readonly alumnoRepository: AlumnoRepository;

    constructor(alumnoRepository: AlumnoRepository) {
        this.alumnoRepository = alumnoRepository;
    }

    async getalumno(id: number): Promise<Alumno | null> {
        try {
            return await this.alumnoRepository.getAlumno(id);
        } catch (error) {
            console.error("Error getting alumno:", error);
            return null;
        }
    }
}