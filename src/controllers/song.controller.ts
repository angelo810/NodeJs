import {Request, Response} from "express"
import { IResponse } from "../models/response.model";
import { ISong, SongModel } from "../models/song.model";

export const createSong = async (req: Request, res: Response)=> {           
    const { artist, dateSong, name, gender, visit } : ISong = req.body;
    const response = await new SongController().create({ artist, dateSong, name, gender, visit });         
    return res.status(response.status).json(response);   
}

export const retrieveSong = async (req: Request, res: Response) => {
    const docId : String = req.params.id; 
    const response = await new SongController().retrieve(docId);         
    return res.status(response.status).json(response);   
 }

 export const updateSong = async (req: Request, res: Response)=> {           
    const { artist, dateSong, name, gender, visit } : ISong = req.body;
    const docId : String = req.params.id; 
    const response = await new SongController().update(docId, { artist, dateSong, name, gender, visit });         
    return res.status(response.status).json(response);   
}

export const deleteSong = async (req: Request, res: Response) => {
    const docId : String = req.params.id; 
    const response = await new SongController().delete(docId);         
    return res.status(response.status).json(response);   
 }

 export const listSong = async (req: Request, res: Response) => {
    const response = await new SongController().list();         
    return res.status(200).json(response);    
}

class SongController {

    public async create(payload : ISong) : Promise<IResponse> {
        const song = new SongModel(payload);
        return song.save().then(data => {
            return {
                message: "CREATED: Song added to database",
                status: 201,
                content : data
            }
        }).catch(err => {
            return {
                message: "Error on create SONG",
                status: 500,
                content : err
            }
        });        
    }
    public async retrieve(docId: String) : Promise<IResponse> {        
        return SongModel.findOne({_id: docId}).then(data => {
            if(data === null) {
                return {
                    message: "NOT FOUND: Song not found",
                    status: 404,
                    content : data
                };
            }
            return {
                message: "OK: Song retrieve",
                status: 200,
                content : data
            };
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: " + err.name ,
                status: 500,
                content : err
            };
        });        
    }

    public async update(docId: String, payload : ISong) : Promise<IResponse>{
        return SongModel.updateOne({_id: docId} , { $set: { 
            artist: payload.artist, 
            dateSong: payload.dateSong, 
            name: payload.name, 
            gender: payload.gender, 
            visit: payload.visit
          } }).then(data => {            
            return {
                message: "OK: Song updated",
                status: 200,
                content : data
            }
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: Song not updated",
                status: 500,
                content : err
            }
        });
    }
    public async delete(docId: String) : Promise<IResponse> {
        return SongModel.deleteOne({_id: docId}).then(data => {
            if (data.deletedCount == 0) {
                return {
                    message: "NOT FOUND: Song not found",
                    status: 404,
                    content : data
                };
            }
            return {
                message: "OK: Song deleted",
                status: 200,
                content : data
            }
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: " + err.name,
                status: 500,
                content : err
            }
        });
    }
    public async list() : Promise<IResponse> {
        return SongModel.find({}).then(data => {
                return {
                    message: "OK: All Songs retrieve",
                    status: 200,
                    content : data
                };
            }).catch(err => {
                return { message: "Error on retrieve Songs", status: 500, content : err }
        });       
    }
}

  
