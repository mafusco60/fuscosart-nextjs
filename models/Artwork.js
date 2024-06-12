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
      default: '',
    },
    descriptive_words: 
    {
      type: String,
      default: '',
    },
    original: {
        available: {
          type: Boolean,
          
        },
        substrate: {
          type: String,
         
        },
        dimensions: {
          type: String,
        
        },
        price: {
          type: Number,
          default: 0,
        },
      },
    

    images: [
      {
        type: String,
        default: '',
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

const Artwork = models.Artwork || model('Artwork', ArtworkSchema);

export default Artwork;