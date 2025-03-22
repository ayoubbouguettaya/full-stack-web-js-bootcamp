import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { RequestWithDecodeToken, DecodedToken } from "../types";
import { AUTH_SECRET } from "../config/constants";


// export const protectedRoute = (req: RequestWithDecodeToken, res: Response, next: NextFunction) => {
//     const token = req.headers.authorization;

//     if (!token) return res.sendStatus(401);

//     try {
//         const decodedToken = jwt.verify(token, AUTH_SECRET);
//         req.decodedToken = decodedToken as DecodedToken;
//         next();

//     } catch (error) {
//         console.log(error.message)
//         return res.sendStatus(403);
//     }
// };

export const protectedRouteDynamic = (roles: string[]) => {

    return (req: RequestWithDecodeToken, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;
    
        if (!token) return res.sendStatus(401);
    
        try {
            const decodedToken = jwt.verify(token, AUTH_SECRET);
            req.decodedToken = decodedToken as DecodedToken;

            if(roles.includes(req.decodedToken.role)) {
                res.status(403).send()
                return;
            }
            next();
    
        } catch (error) {
            console.log(error.message)
            return res.sendStatus(403);
        }
    };
}
