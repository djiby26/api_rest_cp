import { resolve } from "path";
import { config } from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default config({
  path: resolve(__dirname, "../.env"),
});
