import { Tutor } from "./tutor";

export interface TutorRepository {
    getTutores():Promise<Tutor[]|null>;
    registerTutor(tutor:Tutor):Promise<Tutor|null>;

}