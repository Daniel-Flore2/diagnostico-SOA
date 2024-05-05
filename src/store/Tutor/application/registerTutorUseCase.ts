import { TutorRepository } from "../domain/tutorRepository";
import { Tutor} from "../domain/tutor";

export class RegisterTutorUseCase{
    constructor(readonly tutorRepository: TutorRepository){}

    async run(tutor: Tutor): Promise<Tutor|null>{
        try {
            const newTutor = {
                id: tutor.id,
                nombre: tutor.nombre,
                alumnos: tutor.alumnos
            };
            return await this.tutorRepository.registerTutor(newTutor);
        } catch (error) {
            return null;
            
        }
    }
}