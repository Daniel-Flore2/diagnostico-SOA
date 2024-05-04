import mysql from "mysql2/promise";
import { Signale } from "signale";

const signale = new Signale();

const config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'diagnostico',
    password: '',
    waitForConnections: true,
    connectionLimit: 10,
};

const pool = mysql.createPool(config);

export async function query(sql: string, params?: any[]) {
    try {
        const conn = await pool.getConnection();
        signale.success("Conexión exitosa a la BD");
        const result = await conn.execute(sql, params);
        conn.release();
        return result;
    } catch (error) {
        console.log(error.message);
        signale.error(error);
        return null;
    }
}