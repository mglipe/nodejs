import InternalError from "./InternalError.js";

class Error404 extends InternalError{
    constructor(message = 'Not Found'){
        super(message, 404);
    }
}


export default Error404;