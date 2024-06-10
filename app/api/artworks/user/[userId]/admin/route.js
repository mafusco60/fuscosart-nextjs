import connectDB from '@/config/database';
import User from '@/models/User';


 

// GET /api/users/user/:userId
export const GET = async (request, { params }) => {
  try {
    await connectDB();

   
    }
   catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};