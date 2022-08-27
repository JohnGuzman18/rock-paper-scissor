/*const dbConfig = require ("./config/database");

const mongoose = require ("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.records = require("./records.model")(mongoose);

module.exports = db;*/



// Running the server...
app.listen (8080,()  => {
    connectDB();
     console.log("Server running on port", 8080);
   });


   