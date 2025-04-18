import logger from "../utils/LoggerUtil";
import { config as dotenvConfig } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function globalSetup() {
	const envPath = process.env.NODE_ENV
		? path.resolve(__dirname, `../config/.env.${process.env.NODE_ENV}`)
		: path.resolve(__dirname, "../config/.env");

	dotenvConfig({ path: envPath });

	logger.info("⚙️ Global setup is completed.");
}
