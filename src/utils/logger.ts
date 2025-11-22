/**
 * Simple console wrapper for logging
 * Replaces @logger dependency
 */

export interface ILogger {
  debug: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
}

export const createLogger = (context: string): ILogger => ({
  debug: (...args: unknown[]) => console.debug(`[${context}]`, ...args),
  info: (...args: unknown[]) => console.info(`[${context}]`, ...args),
  warn: (...args: unknown[]) => console.warn(`[${context}]`, ...args),
  error: (...args: unknown[]) => console.error(`[${context}]`, ...args),
});

// For backward compatibility with createContextLogger
export const createContextLogger = createLogger;
