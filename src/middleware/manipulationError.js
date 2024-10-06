import mongoose from "mongoose";
import InternalError from "../error/InternalError.js";
import BadRequestError from "../error/BadRequestError.js";
import ValidationError from "../error/ValidationError.js";


function manipulationError(error, req, res, next){
    if(error instanceof mongoose.Error.CastError){
        return new BadRequestError().sendError(res, error);
    }else if(error instanceof mongoose.Error.ValidationError){  
       return new ValidationError().sendError(res, error);
    }else if(error instanceof InternalError){
        return error.sendError(res);
    }
    new InternalError().sendError(res, error);
}


export default manipulationError;