import { Request, Response } from 'express';
import dbConnect from '../config/mongo';
import { RequestExt } from '../interface/req-ext';
import { Storage } from '../interface/storage';
import { registerUpload } from '../services/storage';
import { handleHttp } from '../utils/error.handle';

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`,
        }
        const response = await registerUpload(dataToRegister);
        res.send(response);
        console.log("File uploaded!");
    } catch (error) {
        handleHttp(res, "ERROR_GET_BLOG");
    }
}

export { getFile };