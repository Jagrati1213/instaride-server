import mongoose from "mongoose";

export function connection_with_mongodb(): void {
  if (process.env.DATABASE_URL) {
    const db: string = process.env.DATABASE_URL;
    mongoose
      .connect(db)
      .then(() => console.log("Database connected"))
      .catch((error: any) => console.log(error));
  } else {
    console.log(
      "DATABASE_URL is not defined. Please check your environment variables."
    );
  }
}
