class InternalError extends Error{

    constructor(message = 'Internal Error', status = 500){
        super();
        this._message = message;
        this._status = status;
    }


    sendError(res, error){
        const message = {
            message: `${this._message} - ${error}`,
            status: this._status
        }

        res.status(this._status).json(message);
    }
}


export default InternalError;