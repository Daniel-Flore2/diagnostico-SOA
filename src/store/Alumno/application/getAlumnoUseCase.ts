import { Alumno } from "../domain/alumno";
import { AlumnoRepository } from "../domain/alumnoRepository";

export class GetalumnoUseCase {
    private readonly alumnoRepository: AlumnoRepository;

    constructor(alumnoRepository: AlumnoRepository) {
        this.alumnoRepository = alumnoRepository;
    }

    async getalumno(matricula: number): Promise<Alumno | null> {
        try {
            return await this.alumnoRepository.getAlumno(matricula);
        } catch (error) {
            console.error("Error getting alumno:", error);
            return null;
        }
    }
}