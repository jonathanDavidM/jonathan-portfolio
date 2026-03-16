type LogLevel = "info" | "warn" | "error" | "debug";

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: Record<string, unknown>;
}

class Logger {
  private formatMessage(
    level: LogLevel,
    message: string,
    data?: Record<string, unknown>
  ): string {
    const timestamp = new Date().toISOString();
    const entry: LogEntry = {
      level,
      message,
      timestamp,
      data,
    };
    return JSON.stringify(entry);
  }

  info(message: string, data?: Record<string, unknown>): void {
    console.log(this.formatMessage("info", message, data));
  }

  warn(message: string, data?: Record<string, unknown>): void {
    console.warn(this.formatMessage("warn", message, data));
  }

  error(message: string, data?: Record<string, unknown>): void {
    console.error(this.formatMessage("error", message, data));
  }

  debug(message: string, data?: Record<string, unknown>): void {
    if (process.env.NODE_ENV === "development") {
      console.debug(this.formatMessage("debug", message, data));
    }
  }
}

export const logger = new Logger();
