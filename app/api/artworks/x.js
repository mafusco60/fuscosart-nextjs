

import connectDB from '@/config/database';
import Artwork from '@/models/Artwork';
import { getSessionUser } from '@/utils/getSessionUser';
import { originalPathname } from 'next/dist/build/templates/app-page';

// GET /api/artworks
export const GET = async (request) => {
  try {
    await connectDB();


export const POST = async (request) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response('User ID is required', { status: 401 });
    }

    const { userId } = sessionUser;

    const formData = await request.formData();

    // Access all values from amenities and images
    const images = formData
      .getAll('images')
      .filter((image) => image.name !== '');

    // Create artworkData object for database
    const artworkData = {
      type: formData.get('type'),
      name: formData.get('name'),
      description: formData.get('description'),
      original: {
        available: formData.get('original.available'),
        price: formData.get('original_price'),
      },
      descriptive_words: formData.get('descriptive_words'),
      admin: userId,
    };

    

     
    const newArtwork = new Artwork(artworkData);
    await newArtwork.save();

    return Response.redirect(
      `${process.env.NEXTAUTH_URL}/artworks/${newArtwork._id}`
    );

    // return new Response(JSON.stringify({ message: 'Success' }), {
    //   status: 200,
    // });
  } catch (error) {
    return new Response('Failed to add artwork', { status: 500 });
  }
};