import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

// if database is already connected, don't connect again

if ( connected){
    console.log('MongoDB is already connected...');
    return;
}

// Connect to MongoDB

try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected = true;
    console.log('MongoDB is connected...');

} catch (error) {
    console.log('error connecting to MongoDB: ', error);

}}
    export default connectDB; 

    