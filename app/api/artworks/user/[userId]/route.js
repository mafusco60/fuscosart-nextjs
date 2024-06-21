import connectDB from "@/config/database";
import Artwork from "@/models/Artwork";

export const dynamic = "force-dynamic";

// GET /api/artworks/user/:userId
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const userId = params.userId;

    if (!userId) {
      return new Response("User ID is required", { status: 400 });
    }

    const artworks = await Artwork.find({ admin: userId });

    return new Response(JSON.stringify(artworks), {
      status: 200,
    });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
