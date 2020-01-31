import mongoose from 'mongoose';

mongoose
    .connect(process.env.MONGOLAB_URI ||'mongodb://127.0.0.1:27017/blog', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });

const db = mongoose.connection;

export default db;
