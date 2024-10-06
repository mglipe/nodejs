async function paginate(req, res, next){

    try{  
        //implementing pagination
        let {limit = 5, page = 1, fieldOrdenation = 'name', order = -1} = req.query;

        limit = parseInt(limit);
        page = parseInt(page);
        order = parseInt(order);

        if(limit < 0 || page < 0){
            return next(new InternalError('Invalid values - recommeded insert values greater than 0'))
        }

        const result = req.result;

        const users = await result
        .find({})
        //ordenação (1 crescente -1 descrescente)
        //[fieldOrdenation] nessa sintaxe, pois pega o valor da variável
        .sort({ [fieldOrdenation]: order })
        .skip((page - 1) * limit)
        .limit(limit)
        res.status(200).send(users);
    }catch(error){
        next(error);
    }
}



export default paginate;