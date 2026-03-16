import { logger } from "./logger.js";

const requiredEnvVars = ["EMAIL_USER", "EMAIL_PASS"] as const;
const optionalEnvVars = ["PORT", "FRONTEND_URL", "NODE_ENV"] as const;

export function validateEnv(): void {
  const missing: string[] = [];

  requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
      missing.push(varName);
    }
  });

  if (missing.length > 0) {
    logger.warn("Missing required environment variables", { missing });
    logger.warn("Email functionality will be disabled");
  }

  logger.info("Environment validation complete", {
    required: requiredEnvVars.length,
    optional: optionalEnvVars.length,
    missing: missing.length,
  });
}
