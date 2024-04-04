const { Schema, model } = require('mongoose');

// Schema to create a users model
const UsersSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'You need to provide a username!',
        },
        email: {
            type: String,
            required: "You must enter an email address!",
        },
        thoughts: [
            { type: Schema.Types.ObjectId, ref: 'Thoughts' }
        ],
        friends: [
            { type: Schema.Types.ObjectId, ref: 'Users' }
        ]
    },
);

// Method to add friend to user's friends list
UsersSchema.methods.addFriend = function(friend) {
    this.friends.push(friend);
    return this.save();
};

// Vritual called friendCount that retrieves the length of the user's friends array field on query
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});


// Create the User model using the UsersSchema
const Users = model('Users', UsersSchema);

module.exports = Users;    