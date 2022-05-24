import mongoose from "mongoose";
import urlDb from "../../globals.js";

mongoose.connect(
    urlDb
);

let db = mongoose.connection;


export default db;