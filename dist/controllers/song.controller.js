"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSong = exports.deleteSong = exports.updateSong = exports.retrieveSong = exports.createSong = void 0;
const song_model_1 = require("../models/song.model");
const createSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { artist, dateSong, name, gender, timeSong } = req.body;
    const response = yield new SongController().create({ artist, dateSong, name, gender, timeSong });
    return res.status(response.status).json(response);
});
exports.createSong = createSong;
const retrieveSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docId = req.params.id;
    const response = yield new SongController().retrieve(docId);
    return res.status(response.status).json(response);
});
exports.retrieveSong = retrieveSong;
const updateSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { artist, dateSong, name, gender, timeSong } = req.body;
    const docId = req.params.id;
    const response = yield new SongController().update(docId, { artist, dateSong, name, gender, timeSong });
    return res.status(response.status).json(response);
});
exports.updateSong = updateSong;
const deleteSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docId = req.params.id;
    const response = yield new SongController().delete(docId);
    return res.status(response.status).json(response);
});
exports.deleteSong = deleteSong;
const listSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield new SongController().list();
    return res.status(200).json(response);
});
exports.listSong = listSong;
class SongController {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const song = new song_model_1.SongModel(payload);
            return song.save().then(data => {
                return {
                    message: "CREATED: Song added to database",
                    status: 201,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "Error on create SONG",
                    status: 500,
                    content: err
                };
            });
        });
    }
    retrieve(docId) {
        return __awaiter(this, void 0, void 0, function* () {
            return song_model_1.SongModel.findOne({ _id: docId }).then(data => {
                if (data === null) {
                    return {
                        message: "NOT FOUND: Song not found",
                        status: 404,
                        content: data
                    };
                }
                return {
                    message: "OK: Song retrieve",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "INTERNAL SERVER ERROR: " + err.name,
                    status: 500,
                    content: err
                };
            });
        });
    }
    update(docId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return song_model_1.SongModel.updateOne({ _id: docId }, { $set: {
                    artist: payload.artist,
                    dateSong: payload.dateSong,
                    name: payload.name,
                    gender: payload.gender,
                    timeSong: payload.timeSong
                } }).then(data => {
                return {
                    message: "OK: Song updated",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "INTERNAL SERVER ERROR: Song not updated",
                    status: 500,
                    content: err
                };
            });
        });
    }
    delete(docId) {
        return __awaiter(this, void 0, void 0, function* () {
            return song_model_1.SongModel.deleteOne({ _id: docId }).then(data => {
                if (data.deletedCount == 0) {
                    return {
                        message: "NOT FOUND: Song not found",
                        status: 404,
                        content: data
                    };
                }
                return {
                    message: "OK: Song deleted",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "INTERNAL SERVER ERROR: " + err.name,
                    status: 500,
                    content: err
                };
            });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return song_model_1.SongModel.find({}).then(data => {
                return {
                    message: "OK: All Songs retrieve",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return { message: "Error on retrieve Songs", status: 500, content: err };
            });
        });
    }
}
