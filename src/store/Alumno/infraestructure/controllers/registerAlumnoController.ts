import { Request,Response,  } from "express";
import { RegisterAlumnoUseCase } from "../../application/registerAlumnoUseCase";
import { Alumno } from "../../domain/alumno";

export class RegisterAlumnoController{

    RegisterAlumnoUseCase!: RegisterAlumnoUseCase;

    constructor(readonly registerAlumnosUseCase: RegisterAlumnoUseCase){
        this.registerAlumnosUseCase = registerAlumnosUseCase;
    }

    async register(req: Request, res: Response){
        try {
            const{id,nombre,materia,tutor} = req.body;
            
            const alumno : Alumno = {
                id : id,
                nombre: nombre,
                materia: materia,
                tutor: tutor,

            };
            const newAlumno = await this.registerAlumnosUseCase.run(alumno);

            if(newAlumno){
                return res.status(201).send({
                    status: "success",
                    data:{
                        message: "alumnito agrgado con exito",
                        alumno: newAlumno
                    }
                });
                
            }else{
                return res.status(500).send({
                    status: "error",
                    message: "ocurrio un error al agregar un alumno"
                });
            }
        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "ocurrio un error al agregar"
            
            });
            
        }
    }
}

