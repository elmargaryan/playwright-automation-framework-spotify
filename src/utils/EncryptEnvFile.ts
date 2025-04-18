import CryptoJSUtilFile from "crypto-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import logger from "./LoggerUtil";

const __filename = fileURLToPath(import.meta.url);
const currentDir = path.dirname(__filename);
const srcDir = path.resolve(currentDir, "..");
const configDir = path.resolve(srcDir, "config");
let envFilePath = path.join(configDir, ".env");

// If NODE_ENV is set, load the corresponding environment file
if (process.env.NODE_ENV) {
	envFilePath = path.join(configDir, `.env.${process.env.NODE_ENV}`);
}

export function encryptEnvFile() {
	const SALT = process.env.SALT || "defaultSALT"; //Set default secret key
	const envFileContent = fs.readFileSync(envFilePath, "utf8");
	const envLines = envFileContent.split("\n");

	const encryptedLines = envLines.map((line) => {
		const [key, value] = line.split("=");

		if (key === "SALT") {
			return line; // Don't encypt SALT since it's the encryption key
		}

		if (value) {
			const encryptedValue = CryptoJSUtilFile.AES.encrypt(value, SALT).toString();
			return `${key}=${encryptedValue}`;
		}

		return line;
	});

	const updatedEnvContent = encryptedLines.join("\n");
	fs.writeFileSync(envFilePath, updatedEnvContent, "utf8");

	logger.info("Encryption complete. Updated .env file.");
}
export function decryptEnvFile() {
	const SALT = process.env.SALT || "defaultSALT"; //Set default secret key
	const envFileContent = fs.readFileSync(envFilePath, "utf8");
	const envLines = envFileContent.split("\n");

	const decryptedLines = envLines.map((line) => {
		const [key, value] = line.split("=");

		if (key === "SALT") {
			return line; // Don't encypt SALT since it's the encryption key
		}

		if (value) {
			const decryptedValue = CryptoJSUtilFile.AES.decrypt(value, SALT).toString(CryptoJSUtilFile.enc.Utf8);

			return `${key}=${decryptedValue}`;
		}

		return line;
	});

	const updatedEnvContent = decryptedLines.join("\n");
	fs.writeFileSync(envFilePath, updatedEnvContent, "utf8");

	logger.info("Decryption complete. Updated .env file.");
}
