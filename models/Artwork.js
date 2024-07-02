import { Schema, model, models } from "mongoose";
export const dynamic = "force-dynamic";

const ArtworkSchema = new Schema(
  {
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    descriptive_words: {
      type: String,
      required: true,
    },
    is_lands: {
      type: Boolean,
      required: true,
    },

    orig_avail: {
      type: Boolean,
      required: true,
    },
    orig_subst: {
      type: String,
      required: true,
    },
    orig_dimen: {
      type: String,
      required: true,
    },
    orig_price: {
      type: Number,
    },

    images: [
      {
        type: String,
        required: true,
      },
    ],
    is_featured: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Artwork = models.Artwork || model("Artwork", ArtworkSchema);

export default Artwork;
