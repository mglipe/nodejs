import InternalError from "./InternalError.js";

class ValidationError extends InternalError{
    constructor(){
        super('Validation Error', 400);
    }
    

    sendError(res, error){
        const interableError = Object.values(error.errors);
        // interableError.map(err => message.required = err.message);
        const requiredFiled = interableError.reduce((acc, err) => {
            acc[err.path] = err.message;

            return acc;
        }, {})

        const message = {
            message: this._message,
            status: this._status,
            requiredFiled: requiredFiled
        }

        res.status(this._status).json(message);

    }
}


export default ValidationError;