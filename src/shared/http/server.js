import http from 'http'
import express from 'express'
import pageRoutes from '../../routes/pageRoutes.js';
import loginRoutes from '../../routes/loginRoutes.js';


const app = express();
const server = http.createServer(app);
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.set('view engine','ejs');

app.use('/',pageRoutes);
app.use('/',loginRoutes)

const port  = process.env.PORT | 5000

server.listen(port,(error)=>{
   if(error){
    console.log("error occur",error.message.toString())
   }else{
    console.log("Server Started At Port Number",port);
   }
})
