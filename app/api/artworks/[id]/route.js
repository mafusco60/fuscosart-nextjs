import connectDB from '@/config/database';
import Artwork from '@/models/Artwork';



// GET /api/artworks/:id
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
};