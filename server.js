import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./backend/route.js";
import { errorHandler } from "./middleware.js";
const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", router);

app.use(errorHandler);



app.listen(PORT, () => {
    console.log(`Server running on localhost://${PORT}`);
});