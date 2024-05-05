import { query } from "../../../database/database";
import { Materia } from "../domain/materia";
import { MateriaRepository } from "../domain/materiaRepository";

export class MysqlMateriaRepository implements MateriaRepository {

    async getMaterias(): Promise<Materia[] | null> {
        try {
            const sql = "SELECT * FROM materias";
            const [rows]: any = await query(sql);

            if (!Array.isArray(rows) || rows.length === 0) {
                return null;
            }

            const materias = rows.map((row: any) => {
                return new Materia(
                    row.id,
                    row.nombre,
                    row.alumnos
                );
            });

            return materias;

        } catch (error) {
            console.error('Error al obtener las materias:', error);
            throw new Error('Error al obtener las materias');
        }
    }
  
    async registerMateria(materia: Materia): Promise<Materia | null> {
        try {
            const sql = "INSERT INTO materias (id, nombre, alumnos) VALUES (?, ?, ?)";
            await query(sql, [materia.id, materia.nombre, materia.alumnos]);

            return materia;

        } catch (error) {
            console.error('Error al registrar la materia:', error);
            throw new Error('Error al registrar la materia');
        }
    }
}
