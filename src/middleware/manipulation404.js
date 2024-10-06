import Error404 from "../error/Error404.js";

function manipulation404(req, res, next){
    const error404 = new Error404();
    //encaminho a responsabilidade para o middleware manipulador de error
    next(error404);
}


export default manipulation404;