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

orig_avail: {
  type: Boolean,
  default: false,         
},
orig_subst: {
  type: String,
  default: ''         
},
orig_dimen: {
  type: String,
  default: ''
},
orig_price: {
  type: Number,
  default: 0,
}, 
  
images: [
  {
    type: String,
    default: '',
  },
],
is_featured: {
  type: Boolean,
  default: false,
},
  },
  {
    timestamps: true,
  },
);

const Artwork = models.Artwork || model('Artwork', ArtworkSchema);

export default Artwork;