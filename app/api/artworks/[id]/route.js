import connectDB from '@/config/database';
import Artwork from '@/models/Artwork';
import { getSessionUser } from '@/utils/getSessionUser';




// GET /api/artworks/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const artwork = await Artwork.findById(params.id);

    if (!artwork) return new Response('Artwork Not Found', { status: 404 });

    return new Response(JSON.stringify(artwork), {
      status: 200,
    });
  } catch (error) {

    return new Response('Something Went Wrong', { status: 500 });
  }
};

// DELETE /api/artworks/:id
export const DELETE = async (request, { params }) => {
  try {
    const artworkId = params.id;

    const sessionUser = await getSessionUser();

    // Check for session
    if (!sessionUser || !sessionUser.userId) {
      return new Response('User ID is required', { status: 401 });
    }

    const { userId } = sessionUser;

    await connectDB();

    const artwork = await Artwork.findById(artworkId);

    if (!artwork) return new Response('Artwork Not Found', { status: 404 });

    // Verify ownership
    if (artwork.admin.toString() !== userId) {
      return new Response('Unauthorized', { status: 401 });
    }

    await artwork.deleteOne();

    return new Response('Artwork Deleted', {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something Went Wrong', { status: 500 });
  }
};

// PUT request /api/artworks/:id
export const PUT = async (request, { params }) => {
  try {
    await connectDB();
   
    const sessionUser = await getSessionUser();
    
    if (!sessionUser || !sessionUser.userId) {
      return new Response('User ID is required', { status: 401 });
    }
    const { id } = params;
    const { userId } = sessionUser;

    const formData = await request.formData();

    //Get artwork to update
    const existingArtwork = await Artwork.findById(id);
    
    if (!existingArtwork) 
      return new Response('Artwork does not exist', { status: 404 });

  // Verify ownership
  if (existingArtwork.admin.toString() !== userId) {
    return new Response('Unauthorized', { status: 401 });
  }


    //Create artworkData object for database
    const artworkData = {
      admin: userId,
      type: formData.get('type'),    
      name: formData.get('name'),
      description: formData.get('description'),
      
      orig_avail: formData.get('orig_avail'),
      orig_price: formData.get('orig_price'), 
      orig_subst: formData.get('orig_subst'),
      orig_dimen: formData.get('orig_dimen'),
      
      descriptive_words: formData.get('descriptive_words'),
     }



    // Update artwork in database
    const updatedArtwork = await Artwork.findByIdAndUpdate(id, artworkData);


    return new Response(JSON.stringify (updatedArtwork) , {
     status: 200,
    });

  } catch (error) {
    console.error(error);
    return new Response('Failed to add artwork', { status: 500 });
  }
};