"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongModel = void 0;
const mongoose_1 = require("mongoose");
//ESQUEMA
const songScheme = new mongoose_1.Schema({
    artist: { type: String },
    dateSong: { type: Date },
    name: { type: String },
    gender: { type: String },
    timeSong: { type: Number }
});
//MODELO
const SongModel = (0, mongoose_1.model)("SongModel", songScheme);
exports.SongModel = SongModel;
