const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require("../../controllers/userscontroller.js");

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);
  
//* Add a friend to the user's friend list
router.route("/:userId/friend/:friendId")
  .post(addFriend);

//* Remove a friend from the user's friend list
router.route("/:userId/friends/:friendId")
  .delete(removeFriend);

module.exports = router;    
