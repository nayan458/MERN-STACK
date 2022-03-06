const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONG_KEY,
                    {
                        useUnifiedTopology: true,
                        useNewUrlParser: true
                    }
)
.then(()=>console.log("successfully connected to database"))
.catch((err)=>console.log(`ERROR : ${err}`))