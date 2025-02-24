import { config } from "dotenv";
config();

export const envConfig = {
  PORT: process.env.PORT!,
  MONGODB: process.env.MONGODB!,
  GOOGLE_ID: process.env.GOOGLE_ID!,
  GOOGLE_SECRET: process.env.GOOGLE_SECRET!,
  GOOGLE_URL: process.env.GOOGLE_URL!,
  GOOGLE_REFRESH: process.env.GOOGLE_REFRESH!,
  TOKEN_SECRET: process.env.TOKEN_SECRET!,
};
