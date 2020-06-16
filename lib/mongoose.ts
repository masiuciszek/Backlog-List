import mongoose from 'mongoose';

interface Connect {
  isConnected?: number;
}

const connection: Connect = {};

const connectDb = async () => {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(
    'mongodb://127.0.0.1:27017/backlog-manager',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  );
  console.log('Mongo db is connected!');
  connection.isConnected = db.connections[0].readyState;
};

export default connectDb;
