const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent thought _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: "Username is required",
      trim: true,
    },
    // use reactions enum for data validation
    reactionText: {
      type: String,
      required: "You must supply a comment",
      maxLength: 280,
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);
// create a virtual called "reaction" that retrieves the length of the thought's reactions array field on query
reactionSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Reactions = model("Reactions", reactionSchema);

module.exports = Reactions;
