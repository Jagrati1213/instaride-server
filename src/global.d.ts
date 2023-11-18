declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT: string | number;
      DATABASE_URL: string;
      // Add other environment variables types here
    }
  }
}
