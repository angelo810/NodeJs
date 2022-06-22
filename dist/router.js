"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const song_controller_1 = require("./controllers/song.controller");
const router = (app) => {
    app.post("/songs", song_controller_1.createSong);
    app.get("/songs/:id", song_controller_1.retrieveSong);
    app.put("/songs/:id", song_controller_1.updateSong);
    app.delete("/songs/:id", song_controller_1.deleteSong);
    app.get("/songs", song_controller_1.listSong);
};
exports.router = router;
