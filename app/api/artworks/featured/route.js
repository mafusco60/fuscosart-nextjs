import connectDB from "@/config/database";
import Artwork from "@/models/Artwork";

export const dynamic = "force-dynamic";

// GET /api/artworks/featured
export const GET = async (request) => {
  try {
    await connectDB();

    const artworks = await Artwork.find({
      is_featured: true,
    });

    return new Response(JSON.stringify(artworks), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};
