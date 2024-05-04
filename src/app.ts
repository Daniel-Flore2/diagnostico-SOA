import express from "express";
import cors from "cors";
import { Signale } from 'signale';




// Inicializa la aplicación Express
const app = express();
const signale = new Signale();


// Configura middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Configura el puerto
const port = 3006 ;
app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
});