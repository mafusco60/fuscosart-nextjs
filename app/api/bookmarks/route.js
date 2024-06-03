import connectDB from '@/config/database';
import User from '@/models/User';
import Artwork from '@/models/Artwork';
import { getSessionUser } from '@/utils/getSessionUser';

export const dynamic = 'force-dynamic';

export const POST = async (request) => {

    try {
        await connectDB();

        const sessionUser = await getSessionUser();
        
        const { artworkId } = await request.json();

        if (!sessionUser || !sessionUser.userId) {
            return new Response('User ID is required', 
            { status: 401 });
        }
        const { userId } = sessionUser;
        
        //Find user in database
        const user = await User.findOne({ _id: userId });

        //Check if artwork is bookmarked
        let isBookmarked = user.bookmarks.includes(artworkId);
        let message;

        if (isBookmarked) {
            //Remove artwork from bookmarks
            user.bookmarks.pull(artworkId);    
            message = 'Artwork removed from bookmarks successfully';
            isBookmarked = false;
       
        } else {
            //Add artwork to bookmarks
            user.bookmarks.push(artworkId);
            message = 'Artwork added to bookmarks successfully';
            isBookmarked = true;
        }

        await user.save();
        
        return new Response(JSON.stringify({ message, isBookmarked }), 
        { status: 200 });

    } catch (error) {
        console.log(error);
        return new Response ('Something went wrong', { status: 500 });
    }
}
