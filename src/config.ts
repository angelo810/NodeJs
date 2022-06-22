import { config } from "dotenv";
config();
export const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1/onlinemusicdb";
export const PORT = process.env.PORT || 3001;
