import { Router } from "express";
import {
  listSong,
  createSong,
  deleteSong,
  retrieveSong,
  updateSong,
} from "./controllers/song.controller";

const router = Router();

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

router.get("/songs", listSong);

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
router.post("/songs", createSong);

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
router.get("/songs/:id", retrieveSong);

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
router.delete("/songs/:id", deleteSong);

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
router.put("/songs/:id", updateSong);

export default router;
