// import http from 'http';
import app from './src/app.js';

const PORT = 3000;

// const server = http.createServer((req, res) =>{
//     const body = `
//     <h1>Hello Word!</h1>
//     <ul>
//         <li>home</li>
//         <li>menu</li>
//         <li>teste</li>
//     </ul>`
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     }).end(body);
// })



app.listen(PORT, ()=>{
    console.log('servidor rodando');
})

