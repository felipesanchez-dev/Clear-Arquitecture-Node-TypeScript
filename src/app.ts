import { Server } from "./presentation/server";
import { envs } from "./config/envs";

(() => {
  main();
})();

async function main() {
  new Server({
    port: envs.PORT,
  }).start();
}
