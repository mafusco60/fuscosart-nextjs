import connectDB from '@/config/database';
import Artwork from '@/models/Artwork';


 

// GET /api/artworks/featured
export const GET = async (request) => {
  try {
    await connectDB();
    

    const artworks = await Artwork.find({
        is_featured: true
    });



    return new Response(JSON.stringify(artworks), {
      status: 200,
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};