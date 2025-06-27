import { Router } from "express";
import { AuthRouter } from "./controller";


export class AuthRoutes {



    static get routes(): Router  {
        const router = Router();


        router.use("/", AuthRouter.routes)

        
        

        return router;

    }


}