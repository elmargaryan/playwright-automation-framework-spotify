import winston from "winston";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const currentDir = path.dirname(__filename);

// Go one level above (back to 'src')
const srcDir = path.resolve(currentDir, "..");
// Change to 'logging' folder
const loggingDir = path.resolve(srcDir, "logging");

// Reusable log format with timestamp and level
const customFormat = winston.format.combine(
	winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
	winston.format.printf(({ level, message, timestamp }) => {
		return `${timestamp} [${level}] ${message}`;
	})
);

const logger = winston.createLogger({
	level: "info",
	transports: [
		
		// Console output with colored level
		new winston.transports.Console({
			level: "debug",
			format: winston.format.combine(
				winston.format.colorize({ level: true }),
				winston.format.printf(({ level, message }) => {
					return `[${level}] ${message}`;
				})
			),
		}),

		// File for general info and above
		new winston.transports.File({
			filename: path.join(loggingDir, "test_run.log"),
			level: "info",
			maxsize: 300 * 1024, // 300 KB
			maxFiles: 5,
			format: customFormat,
		}),

		// File for errors only
		new winston.transports.File({
			filename: path.join(loggingDir, "test_error.log"),
			level: "error",
			maxsize: 10 * 1024, // 10 KB
			maxFiles: 5,
			format: customFormat,
		}),
	],
});

export default logger;
