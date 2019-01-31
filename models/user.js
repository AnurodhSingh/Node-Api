const mongoose =  require('mongoose');

var userSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
    },
    name: String,
    password: String,       
},    
{
    timestamps: true
});

// Export Mongoose model
module.exports = mongoose.model('users', userSchema);