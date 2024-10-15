const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")

const dotenv = require("dotenv");
dotenv.config()

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, 
    {useNewUrlParser:true, 
     useUnifiedTopology: true
    }).then(() => console.log("DB IS CONNECTED SUCCESSFULLY !"))
     .catch((err)=>console.log(err))

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800, ()=>{
    console.log("backend server is running!");
});
