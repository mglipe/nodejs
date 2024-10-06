import mongoose from "mongoose";
//Global validator
mongoose.Schema.Types.String.set('validate', {
    validator: (value) => value !==  "",
    message: ({path}) => `The field ${path} can't be emprty`  
})