const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = require('../schemas/userSchema');

const User = mongoose.model('User', userSchema);

const UserModel = {
    getAll: async() => {

    },
    createNew: async({ username, password }) => {
        try {
            // check if user already exists in the database, return an error if true
            // const existingUser = await User.find({ username });

            // if (existingUser.length > 0) {
            //     return { error: "Username is already taken." };
            // }

            // proceed with user creation if username doesnt exist
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ username, password: hashedPassword });
            await user.save();
            return user;
        } catch (error) {
            if (error.code === 11000) {
                return { message: "Username already exists." }
            }
            
        }
    }
}

module.exports = UserModel;