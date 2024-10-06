import { modelPlatform } from '../model/Platform.js';

class PlatformController{

    static async searchPlatforms(req, res, next){
        try{
            const platforms = await modelPlatform.find({});
            res.status(200).json(platforms);
        }catch(error){
            next(error)
        }
    }

    static async searchOnePlatform(req, res, next){
        try{
            const id = req.params.id;
            const platform = await modelPlatform.findById(id);
            res.status(200).json(platform)
        }catch(error){
            next(error)
        }
    }


    static async createPlatform(req, res, next){
        try{
            const newPlatform = await modelPlatform.create(req.body);
            res.status(201).json({message: 'create platform', platform: newPlatform});
        }catch(error){
            next(error)
        }
    }


    static async updatePlatform(req, res, next){
        try{
            const id = req.params.id;
            await modelPlatform.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'update platform'});
        }catch(error){  
            next(error)
        }
        
    }


    static async deletePlatform(req, res, next){
        try{
            const id = req.params.id;
            await modelPlatform.findByIdAndDelete(id);
            res.status(200).json({message: 'delete platform'});
        }catch(error){  
            next(error)
        }
        
    }
}

export default PlatformController;