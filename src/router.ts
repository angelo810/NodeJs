import { Application, Router } from "express";
import { createSong, deleteSong, listSong, retrieveSong, updateSong } from "./controllers/song.controller";

export const router = (app: Application) => {
    app.post("/songs", createSong);    
    app.get("/songs/:id", retrieveSong);
    app.put("/songs/:id", updateSong);
    app.delete("/songs/:id", deleteSong);    
    app.get("/songs", listSong);
}
