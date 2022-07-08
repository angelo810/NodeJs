"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const song_controller_1 = require("./controllers/song.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *  schemas:
 *    Song:
 *      type: object
 *      properties:
 *        artist:
 *          type: string
 *          description: Colocamos el artista de la cancion
 *        dateSong:
 *          type: Date
 *          description: La fecha de la cancion
 *        name:
 *          type: string
 *          description: El nombre del artista de la canción
 *        gender:
 *          type: string
 *          description: El genero de la canción
 *        visit:
 *          type: int
 *          description: Visitas de la canción
 *      required:
 *        - name
 *        - artist
 *      example:
 *        artist: Luka Graham
 *        dateSong: 1999-05-05
 *        name: 7 Years
 *        gender: Pop
 *        visit: 150
 *    SongNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found song
 *      example:
 *        msg: Song not found
 *
 *  parameters:
 *    songId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the song id
 */
/**
 * @swagger
 * tags:
 *  artist: songs endpoint
 *  dateSong: songs date
 *  name: songs
 *  gender: songs
 *  visit: songs visit
 */
/**
 * @swagger
 * /songs:
 *  get:
 *    summary: Returns a list of songs
 *    tags: [Songs]
 *    responses:
 *      200:
 *        description: the list of songs
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Song'
 */
router.get("/songs", song_controller_1.listSong);
/**
 * @swagger
 * /songs:
 *  post:
 *    summary: create a new song
 *    tags: [Songs]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: the songs was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Song'
 *      500:
 *        description: Some server error
 *
 */
router.post("/songs", song_controller_1.createSong);
/**
 * @swagger
 * /songs/{id}:
 *  get:
 *    summary: get a song by Id
 *    tags: [Songs]
 *    parameters:
 *      - $ref: '#/components/parameters/songId'
 *    responses:
 *      200:
 *        description: The Found Song
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Song'
 *      404:
 *        description: the song was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SongNotFound'
 */
router.get("/songs/:id", song_controller_1.retrieveSong);
/**
 * @swagger
 * /songs/{id}:
 *  delete:
 *    summary: delete a song by id
 *    tags: [Songs]
 *    parameters:
 *      - $ref: '#/components/parameters/songId'
 *    responses:
 *      200:
 *        description: the song was deleted
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Song'
 *      404:
 *        description: the song was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SongNotFound'
 *
 */
router.delete("/songs/:id", song_controller_1.deleteSong);
/**
 * @swagger
 * /songs/{id}:
 *  put:
 *    summary: Update a song by id
 *    tags: [Songs]
 *    parameters:
 *      - $ref: '#/components/parameters/songId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Song'
 *    responses:
 *      200:
 *        description: The updated song
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Song'
 *      404:
 *        description: the song was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SongNotFound'
 *
 */
router.put("/songs/:id", song_controller_1.updateSong);
exports.default = router;
