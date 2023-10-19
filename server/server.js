import express from "express";

const app = express();
const PORT = 500;




app.listen(PORT, (req, res) =>{

    console.log("Server listening on port: " + PORT);

})