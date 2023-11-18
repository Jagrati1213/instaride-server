import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Server } from "http";
import { connection_with_mongodb } from "./mongodbs/connection";

// configuration
dotenv.config();

// connection
const port = process.env.PORT;
const app: Application = express();
connection_with_mongodb();

/*middlewares
 * cors: connected different ports together
 * json & urlencoded : use for getting body response
 */
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded());

// route
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({
    msg: "welcome in Backend of InstaRide",
  });
});
// server
const server: Server = app.listen(port, () => {
  console.log("server started at Port ", port);
});
