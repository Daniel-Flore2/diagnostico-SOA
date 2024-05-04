import { Materia } from "../domain/materia";
import { MateriaRepository } from "../domain/materiaRepository";

export class getMateriaUseCase {
  constructor(readonly materiaRepository: MateriaRepository) {}

  async run(): Promise<Materia[] | null> {
    try {
      const getAll = await this.materiaRepository.getMaterias();
      console.log(getAll);
      return getAll;
    } catch (error) {
      return null;
    }
  }
}
