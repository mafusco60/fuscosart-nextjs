import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  { is_admin: {
    type: Boolean,
    default: false,
    },
    email: {
      type: String,
      unique: [true, 'Email already exists!'],
      required: [true, 'Email is required!'],
    },
    username: {
      type: String,
      required: [true, 'Username is required!'],
    },
   
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Artwork',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = models.User || model('User', UserSchema);

export default User;