import {Request} from "express"

export type DecodedToken = {
    userId: number;
    role?: string;
}

export type RequestWithDecodeToken = Request & {decodedToken?: DecodedToken}