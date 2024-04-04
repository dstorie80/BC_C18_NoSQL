const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtscontroller.js");

// Get all thoughts / Create a thought | /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// Get a specific thought by id / Update a thought / Delete a thought | /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Create a reaction to a thought | /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// Delete a reaction to a thought | /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
