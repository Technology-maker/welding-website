import dotenv from "dotenv";
import { fileURLToPath } from "node:url";

// Always load the backend's settings, regardless of the launch directory.
dotenv.config({ path: fileURLToPath(new URL("../.env", import.meta.url)) });
