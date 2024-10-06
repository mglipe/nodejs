import InternalError from "./InternalError.js";

class BadRequestError extends InternalError{
    constructor(){
        super('Bad Request Error', 400);
    }
}



export default BadRequestError;


