import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle"

const getBLOG = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_GET_BLOG");
    }
}

const getBLOGS = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_GET_BLOGS");
    }
}

const updateBLOG = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_UPDATE_BLOG ");
    }
}

const postBLOG = ({ body }:Request, res:Response) => {
    try {
        res.send(body);
    } catch (error) {
        handleHttp(res, "ERROR_POST_BLOG");
    }
}

const deleteBLOG = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_DELETE_BLOG");
    }
}

export {getBLOG, getBLOGS, updateBLOG  , postBLOG, deleteBLOG};