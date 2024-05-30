import { Schema, model, models } from 'mongoose';


const ArtworkSchema = new Schema(
  {
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'User',
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
    },
    descriptive_words: [
    {
      type: [String],
    }
  ],
    
    price_original: {
      type: Number,
    },
    
    original: {
        available: {
          type: Boolean,
          default: true,
        },
        price: {
          type: Number,
        },
      },
    

    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Artwork = models.Artwork || model('Artwork', ArtworkSchema);

export default Artwork;