import express from "express";
import cors from "cors";
import { Signale } from 'signale';
import  alumnoRouter  from "../src/store/Alumno/infraestructure/routers/alumnoRoute";
import materiaRouter from "../src/store/Materia/infraestructure/routers/materiaRoute";




// Inicializa la aplicación Express
const app = express();
const signale = new Signale();


// Configura middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1', alumnoRouter);
app.use('/api/v1', materiaRouter);


// Configura el puerto
const port = 3006 ;
app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
});