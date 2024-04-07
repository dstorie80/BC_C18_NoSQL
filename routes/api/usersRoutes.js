const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userscontroller.js");

// Get all users / Create a user | /api/users
router.route("/").get(getAllUsers).post(createUser);

// Get user by id / Update user / Delete user | /api/users/:userId
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

//* Add a friend to the user's friend list | /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend);

//* Remove a friend from the user's friend list | /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").delete(removeFriend);

module.exports = router;
