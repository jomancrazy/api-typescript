import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle"
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interface/req-ext";

const getItems = async (req:RequestExt, res:Response) => {
    try {
       res.send({
        data: "ESTO SOLO LO VE LAS PERSONAS CON SESSION/ JWT",
        user: req.user,
       });
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
}


export { getItems };