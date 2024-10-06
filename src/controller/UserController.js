import { modelPlatform } from '../model/index.js';
import {modelUser} from '../model/index.js';
import Error404 from '../error/Error404.js';
import InternalError from '../error/InternalError.js';
class UserController{

    static async searchAllUser(req , res, next){
        try{
          req.result = modelUser.find();
          next();
        }catch(error){
           next(error);
        }
    }

    static async searchOneUser(req , res, next){
        try{
            const id = req.params.id;
            const user = await modelUser.findById(id);

            if(user === null){
                return next(new Error404('Id user not found'));
            }

            res.status(200).json(user);
        }catch(error){
           next(error);
        }
    }

    static async createUser(req , res, next){
        try{
            const platform = req.body.platform;
            let embbededObject = req.body;
            if(platform !== undefined){
                const searchPlatform = await modelPlatform.findById(platform);
                if(searchPlatform === null){
                    //Cannot set headers after they are sent to the client (study this error) - só pode retorna uma resposta no mesmo fluxo;
                    return next(new Error404('Platform not found'))
                    
                }
                embbededObject = {...req.body, platform: {...searchPlatform}};
            }

            const newUser = await modelUser.create(embbededObject);
            res.status(201).json({message: 'user created', user: newUser});
        }catch(error){
            next(error);
        }
    }

    static async updateUser(req , res, next){
        try{
            const id = req.params.id;
            const userUpdated = await modelUser.findByIdAndUpdate(id, req.body);

            if(userUpdated === null){
                return next(new Error404('is not possible update because id was not found'));
            }

            res.status(200).json({message: 'user updated'});
        }catch(error){
           next(error)
        }

    }

    static async deleteUser(req , res, next){
        try{
            const id = req.params.id;
            const searchUser  = await modelUser.findById(id);
            if(searchUser === null){
                return next(new Error404('is not possible deleted because id was not found'));
            }
            
            await modelUser.deleteOne(searchUser);
            res.status(200).json({message: 'user deleted'});

        }catch(error){
           next(error)
        }
    }



    static async deleteAllUser(req, res, next){
        try{
            await modelUser.deleteMany();
            res.status(200).json({message: 'all users was deleted'});
        }catch(error){
           next(error)
        }
    }


    static async searchByFilter(req, res, next){
        try{
            const filter = await processSearch(req.query);

            if(filter === null){
                next(new Error404(`This suggested platform don't have an user vinculed`));
            }

            const queryParams = await modelUser
                .find(filter)
                //populate return full object with datas of the platform
                .populate('platform')
            res.status(200).json(queryParams);

        }catch(error){
            next(error)
        }
    }
}

//about analysis the return of the user when searched by platform
async function processSearch(query){
    const {user, name, maxAccount, minAccount, platform} = query;

    let search = {}
    
    if(user) search.user = {$regex: user, $options: 'i'};
    if(name) search.name = {$regex: name, $options: 'i'};


    if(minAccount || maxAccount) search.account = {};

    
    if(minAccount) search.account.$gte = minAccount;
    if(maxAccount) search.account.$lte = maxAccount;

    if(platform){
        const namePLatform = await modelPlatform.findOne({name: {$regex: platform, $options: 'i'}}).exec();

        if(namePLatform === null){
            search = null;
            return search;
        }

        search.platform = namePLatform._id;

    }
    return search;

}

export default UserController;