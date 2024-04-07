const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/date.js");

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        username: {
          type: String,
          required: true,
        },
        reactionText: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Thoughts = model("Thoughts", thoughtsSchema);

module.exports = Thoughts;
