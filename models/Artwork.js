import { Schema, model, models } from 'mongoose';

const ArtworkSchema = new Schema(
  {
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      
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