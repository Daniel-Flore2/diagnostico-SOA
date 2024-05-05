import { Tutor } from "../domain/tutor";
import { TutorRepository } from "../domain/tutorRepository";

export class GetTutorsUseCase {
  constructor(readonly tutorRepository: TutorRepository) {}

  async run(): Promise<Tutor[] | null> {
    try {
      const getAll = await this.tutorRepository.getTutores();
      console.log(getAll);
      return getAll;
    } catch (error) {
      return null;
    }
  }
}