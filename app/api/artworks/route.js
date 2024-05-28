import connectDB from '@/config/database';
import Artwork from '@/models/Artwork';
import { getSessionUser } from '@/utils/getSessionUser';

 

// GET /api/artworks
export const GET = async (request) => {
  try {
    await connectDB();

    const artworks = await Artwork.find({});

    return new Response(JSON.stringify(artworks), {
      status: 200,
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};


export const POST = async (request) => {
  try {
    await connectDB();
   
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response('User ID is required', { status: 401 });

      const { userId } = sessionUser;

    }

    const formData = await request.formData();

//Access all values from  images
    const images = formData.getAll('images').filter((image) => image.name !== '');

    //Create artworkData object for database

    const artworkData = {
      type: formData.get('type'),    
      name: formData.get('name'),
      description: formData.get('description'),
      price_original: formData.get('price_original'),
      admin: userId,
      images
    }
    console.log(artworkData);

    return new Response(JSON.stringify({ message: 'Success' }), {
      status: 201,
    });
  } catch (error) {
    return new Response('Failed to add artwork', { status: 500 });
  }
};