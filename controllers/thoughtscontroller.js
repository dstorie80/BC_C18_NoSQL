const { thoughts, users } = require("../models");

const thoughtsController = {
  // get all thoughts
  getAllThoughts(req, res) {
    thoughts
      .find({})
      .select("-__v")
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get thought by id
  getThoughtById({ params }, res) {
    thoughts
      .findOne({ _id: params.id })
      .select("-__v")
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // create a new thought
  createThought({ body }, res) {
    thoughts
      .create(body)
      .then((dbThoughtData) => {
        return users.findOneAndUpdate(
          { username: body.username },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res
            .status(404)
            .json({ message: "No user found with this username!" });
          return;
        }
        res.json({ message: "Thought created!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // update a thought by its _id
  updateThought({ params, body }, res) {
    Thoughts.findByIdAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // delete a thought by its _id and remove it from the User's friend list as well
  deleteThought({ params, body }, res) {
    thoughts
      .findOneAndDelete({ _id: params.id })
      .then((deletedThought) => {
        if (!deletedThought) {
          return res
            .status(404)
            .json({ message: "No thought found with this id!" });
        }
        return Users.findOneAndUpdate(
          { username: deletedThought.username },
          { $pull: { thoughts: params.id } },
          { new: true }
        );
      })
      .then((userData) => {
        if (!userData) {
          res
            .status(404)
            .json({ message: "No user found with this username!" });
          return;
        }
        res.json({ message: "Thought deleted!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Create reaction for a thought
  addReaction({ params, body }, res) {
    thoughts
      .findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: body } },
        { new: true, runValidators: true }
      )
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Delete reaction for a thought
  removeReaction({ params, body }, res) {
    thoughts
      .findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: { _id: params.reactionId } } },
        { new: true }
      )
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = thoughtsController;
