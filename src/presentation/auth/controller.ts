import { Router } from "express";


export class AuthRouter {





static get routes(): Router {

    const router = Router();


    router.get("/login", (req, res) => {
        res.json("Este es el Endpot de login")
    });

    router.post("/register", (req, res) => {
        res.json("Este es el endpont de Register")
    });

    router.post("/test", (req, res) => {
      res.json("Este es la ruta de test");
    });

    

    return router;







}






}