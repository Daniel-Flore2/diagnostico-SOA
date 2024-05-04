export class Alumno{
    public id: number;
    public nombre: string;
    public materia: string;
    public tutor: string;

    constructor(id: number, nombre: string, materia:string, tutor:string) {
        this.id = id;
        this.nombre = nombre;
        this.materia = materia;
        this.tutor = tutor;
    }
}