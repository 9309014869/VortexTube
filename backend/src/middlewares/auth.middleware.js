import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import { User } from '../models/user.model.js';
import 'dotenv/config';

export const verifyJWT = asyncHandler(async(req, _, next) => {
    try {
        const accessToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!accessToken) {
            throw new ApiError(401, "Unauthorized request");
        }
    
        const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        console.log("accessToken token:", accessToken);
        console.log("Decoded token:", decodedToken);
    
        const user1 = await User.findById(decodedToken?.userId).select("-password -refreshToken");
             
        if (!user1) {
            throw new ApiError(401, "Invalid access token");
        }
    
        req.user = user1;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});