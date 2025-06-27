import { Router } from "express";
import { AuthRoutes } from "./auth/route";



export class AppRouter {



    static get route(): Router {


        const router = Router()


        router.use("/api/auth", AuthRoutes.routes)
        

        return router;

    


    }




}