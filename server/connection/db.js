import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL ='mongodb://USER:1234@cluster0-shard-00-00.dgiwj.mongodb.net:27017,cluster0-shard-00-01.dgiwj.mongodb.net:27017,cluster0-shard-00-02.dgiwj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-akg9d9-shard-0&authSource=admin&retryWrites=true&w=majority';
        
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;