import express from 'express';
import demoRoutes from './routes/demoRoute.js'; 
const app = express();

app.use("/api/", demoRoutes);


app.listen(5000, ()=>{
    console.log("Server is running");
})