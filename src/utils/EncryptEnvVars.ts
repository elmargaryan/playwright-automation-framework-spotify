import AES from "crypto-js/aes.js";
import Utf8 from "crypto-js/enc-utf8.js";

export function encrypt(text: string): string {
	const SALT = process.env.SALT || "defaultSecretKey";
	const cipherText = AES.encrypt(text, SALT).toString();
	return cipherText;
}

export function decrypt(cipherText: string): string {
	const SALT = process.env.SALT || "defaultSecretKey";
	const bytes = AES.decrypt(cipherText, SALT);
	const originalText = bytes.toString(Utf8);
	return originalText;
}
