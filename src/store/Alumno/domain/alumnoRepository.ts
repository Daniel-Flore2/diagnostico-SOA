import { Alumno } from "./alumno";

export interface AlumnoRepository{
    getAlumno(id:number):Promise<Alumno|null>;
    registerAlumno(alumno:Alumno):Promise<Alumno|null>;
    getAlumnos():Promise<Alumno[] | null>
}