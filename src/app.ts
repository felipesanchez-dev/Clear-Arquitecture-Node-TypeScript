import { Server } from "./presentation/server";
import { envs } from "./config/envs";
import { AppRouter } from "./presentation/route";

(() => {



  main();


  
})();




async function main() {
  new Server({
    port: envs.PORT,
    routes: AppRouter.route
  }).start();
}
