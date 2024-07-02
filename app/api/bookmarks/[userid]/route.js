import connectDB from "@/config/database";
import User from "@/models/User";
import Artwork from "@/models/Artwork";

export const dynamic = "force-dynamic";

// GET /api/bookmarks/:userid
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const user = await User.findById(params.userid);
    const bookmarks = await Artwork.find({ _id: { $in: user.bookmarks } });

    return Response.json(bookmarks);
  } catch (error) {
    return new Response("Something Went Wrong", { status: 500 });
  }
};
