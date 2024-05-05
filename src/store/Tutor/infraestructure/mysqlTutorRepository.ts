import { query } from "../../../database/database";
import { Tutor } from "../domain/tutor";
import { TutorRepository } from "../domain/tutorRepository";

export class MysqlTutorRepository implements TutorRepository {

    async getTutores(): Promise<Tutor[] | null> {
        try {
            const sql = "SELECT * FROM tutor";
            const [rows]: any = await query(sql);

            if (!Array.isArray(rows) || rows.length === 0) {
                return null;
            }

            const tutores = rows.map((row: any) => {
                return new Tutor(
                    row.id,
                    row.nombre,
                    row.alumnos
                );
            });

            return tutores;

        } catch (error) {
            console.error('Error al obtener los tutores:', error);
            throw new Error('Error al obtener los tutores');
        }
    }
    
    async registerTutor(tutor: Tutor): Promise<Tutor | null> {
        try {
            const sql = "INSERT INTO tutor (id, nombre, alumnos) VALUES (?, ?, ?)";
            await query(sql, [tutor.id, tutor.nombre, tutor.alumnos]);

            return tutor;

        } catch (error) {
            console.error('Error al registrar el tutor:', error);
            throw new Error('Error al registrar el tutor');
        }
    }
}
