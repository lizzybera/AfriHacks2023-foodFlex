import cors from "cors";
import { Application, Request, Response, json } from "express";
import helmet from "helmet";
import morgan from "morgan";
import auth from "./router/authRouter";

export const appConfig = (app: Application) => {
  app.use(json()).use(cors()).use(helmet()).use(morgan("dev"));
  app.set("view engine", "ejs");
  app.use("/api", auth);

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "Food Flex APIs 🍑🍍🍇",
      });
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  });
};
