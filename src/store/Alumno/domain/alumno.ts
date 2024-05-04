export class Alumno{
    public matricula: number;
    public nombre: string;
    public materia: string;
    public tutor: string;

    constructor(matricula: number, nombre: string, materia:string, tutor:string) {
        this.matricula = matricula;
        this.nombre = nombre;
        this.materia = materia;
        this.tutor = tutor;
    }
}