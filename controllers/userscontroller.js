const { users, thoughts } = require("../models");
const mongoose = require("mongoose");

const usersController = {
  // get all users
  getAllUsers(req, res) {
    users
      .find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one user by id
  getUserById({ params }, res) {
    users
      .findOne({ _id: params.id })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // create a new user
  createUser({ body }, res) {
    users
      .create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },

  // update user by id
  updateUser({ params, body }, res) {
    users
      .findOneAndUpdate({ _id: params.UserId }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // delete user and associated thoughts by id
  deleteUser({ params }, res) {
    users
      .findOneAndDelete({ _id: params.userId })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        return thoughts
          .deleteMany({ _id: { $in: dbUserData.thoughts } })
          .then((dbThoughtData) => ({
            user: dbUserData,
            thoughts: dbThoughtData,
          }));
      })
      .then((dbData) => {
        if (dbData) {
          res.json(dbData);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // add a friend to a user's friend list
  addFriend({ params }, res) {
    console.log("params", params);
    // push the friend's id to the current user's friends array
    users
      .findOneAndUpdate(
        { _id: params.userId },
        { $push: { friends: params.friendId } },
        { new: true, runValidators: true }
      )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // remove a friend from a user's friend list
  removeFriend({ params }, res) {
    users
      .findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { new: true }
      )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = usersController;
