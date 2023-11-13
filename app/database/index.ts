import mongoose from 'mongoose';
const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://gayuvick2002:KquHn9Ogm3TIgGmf@cluster0.lcijqfj.mongodb.net/');

    }
    catch (e) {
        console.log(e)
    }
}
export default connectToDB;