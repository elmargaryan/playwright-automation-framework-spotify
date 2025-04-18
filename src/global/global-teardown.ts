import logger from "../utils/LoggerUtil";

export default async function globalTeardown() {
	logger.info("🧹 Global teardown ran (nothing to clean yet)");
}