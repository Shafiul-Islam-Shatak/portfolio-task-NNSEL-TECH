import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    console.log('MongoDB URI is not valid please check the env')
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnet() {

    if (cached.conn) {
        return cached.conn
    }
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useNewUndefinedTopology: true
        }).then(mongoose=>mongoose)
    }

    cached.conn = await cached.promise
    return cached.conn
}
export default dbConnet;