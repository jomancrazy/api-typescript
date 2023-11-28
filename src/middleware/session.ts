import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interface/req-ext";



const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop();
        const isUser = verifyToken(`${jwt}`);
        console.log(isUser);

        if(!isUser) {
            res.status(401).send("NO_TIENES_UN_JWT_VALIDO");
        }else {
            req.user = isUser as JwtPayload;
            next();
        }
    } catch (error) {
        console.log({ error });
        res.status(401).send("SESSION_NOT_VALID");
    }
}

export { checkJwt };