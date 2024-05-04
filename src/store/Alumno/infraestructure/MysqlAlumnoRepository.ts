import { query } from "../../../database/database";
import { Alumno } from "../domain/alumno";
import { AlumnoRepository } from "../domain/alumnoRepository";

export class MysqlAlumnoRepository implements AlumnoRepository {
    
    getAlumno(matricula: number): Promise<Alumno | null> {
        throw new Error("Method not implemented.");
    }
    async getAlumnos(): Promise<Alumno[] | null> {
        try {
            const sql = "SELECT * FROM alumno";
            const [rows]: any = await query(sql);

            if (!Array.isArray(rows) || rows.length === 0) {
                return null;
            }

            const alumnos = rows.map((row: any) => {
                return new Alumno(
                    row.matricula,
                    row.nombre,
                    row.materia,
                    row.tutor
                );
            });

            return alumnos;

        } catch (error) {
            console.error('Error al obtener los alumnos:', error);
            throw new Error('Error al obtener los alumnos');
        }
    }
    async registerAlumno(alumno: Alumno): Promise<Alumno | null> {
        try {
            const sql = "INSERT INTO alumno (matricula, nombre, materia, tutor) VALUES (?, ?, ?, ?)";
            await query(sql, [alumno.matricula, alumno.nombre, alumno.materia, alumno.tutor]);

            return alumno;

        } catch (error) {
            console.error('Error al registrar el alumno:', error);
            throw new Error('Error al registrar el alumno');
        }
    }
}
