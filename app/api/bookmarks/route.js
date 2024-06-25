import connectDB from "@/config/database";
import User from "@/models/User";
import Artwork from "@/models/Artwork";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

// GET /api/bookmarks
export const GET = async () => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }
    const { userId } = sessionUser;

    //Find user in database
    const user = await User.findOne({ _id: userId });

    // Get users bookmarks
    const bookmarks = await Artwork.find({ _id: { $in: user.bookmarks } });

    return Response.json(bookmarks);
  } catch (error) {
    console.log(error);
    return new Respose("Something went wrong", { status: 500 });
  }
};
export const POST = async (request) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    const { artworkId } = await request.json();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
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
      message = "Artwork removed from bookmarks successfully";
      isBookmarked = false;
    } else {
      //Add artwork to bookmarks
      user.bookmarks.push(artworkId);
      message = "Artwork added to bookmarks successfully";
      isBookmarked = true;
    }

    await user.save();

    return Response.json({ message, isBookmarked });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
