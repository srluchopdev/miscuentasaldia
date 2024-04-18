const express = require("express");
const morgan = require("morgan");
const database = require("./database");


const app = express();

app.set("port", 4000);



app.listen(app.get("port"));

console.log("escuchando comunicaciones al puerto"+app.get("port"));


//midelweres
app.use(morgan("dev"));

app.get("/productos", async (req,res) => {
    const connection = await database.getConnection();
    const result = await connection.query("SELECT * FROM productos");
    console.log(result)
    
});

