import {Schema, model} from "mongoose";
//Interface
export interface ISong{
    artist: null | string;
    dateSong : null | Date;
    name: null | string;
    gender: string;
    visit: number;
}
//ESQUEMA
const songScheme = new Schema <ISong>({
    artist: {type: String},
    dateSong: {type: Date},
    name :{type: String},
    gender: {type: String},
    visit: {type: Number}
});

//MODELO
const SongModel = model<ISong>("SongModel", songScheme);
export {SongModel};