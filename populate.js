import mongoose from 'mongoose';
import User from './models/user';

const users = [
  {
    id: '1010',
    name: 'Anurodh',
    password: 'anurodh11',
    timestamps: true
  },
  {
    id: '1036',
    name: 'Mansi',
    password: 'mansi36',
    timestamps: true
  },
];

// Configuring the database
const dbConfig = require('./config/database.config.js');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useMongoClient: true
}).then(() => {
    users.map(data => {
        // Initialize a model with movie data
        const user = new User(data);
        // and save it into the database
        user.save();
    });    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
})