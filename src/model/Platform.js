import mongoose from "mongoose";

const platformSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    name: {
        type: String, 
        required: [true, 'campo nome é requerido'],
        //validações do mongoose
        enum: {
            values: ["Gmail", "Hotmail"],
            message: 'provide value is not valid - provide value {VALUE}'
        }
           
    }
    
})

const modelPlatform = mongoose.model('platform', platformSchema);

export {modelPlatform, platformSchema}; 