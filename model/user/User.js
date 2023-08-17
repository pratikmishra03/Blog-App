const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default:"/images/avtar.png"
    },
    coverImage: {
      type: String,
      default:"/images/cover.png"
    },
    role:{
      type: String,
      default: "Blogger",
    },
    bio:{
       type:String,
       default:"sjdhfnr fhhrf hrnfnj3h bfjhnfrhfh f3n3unf. frnf f3nnf fn3 cnfifn ",
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

//compile the schema to form a model
const User = mongoose.model("User", userSchema);

module.exports = User;
