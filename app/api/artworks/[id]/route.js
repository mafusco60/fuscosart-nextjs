import connectDB from '@/config/database';
import Artwork from '@/models/Artwork';
import { getSessionUser } from '@/utils/getSessionUser';



/* // GET /api/artworks/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const artwork = await Artwork.findById( params.id );
    if (!artwork) 
        return new Response('Artwork Not Found', { status: 404 });

    return new Response(JSON.stringify(artwork), {
      status: 200,
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
}; */

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
    console.log(error);
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
    if (artwork.owner.toString() !== userId) {
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