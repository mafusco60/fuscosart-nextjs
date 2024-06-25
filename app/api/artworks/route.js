import connectDB from "@/config/database";
import Artwork from "@/models/Artwork";
import { getSessionUser } from "@/utils/getSessionUser";
import cloudinary from "@/config/cloudinary";

export const dynamic = "force-dynamic";

// GET /api/artworks
export const GET = async (request) => {
  try {
    await connectDB();
    const page = request.nextUrl.searchParams.get("page") || 1;
    const pageSize = request.nextUrl.searchParams.get("pageSize") || 3;

    const skip = (page - 1) * pageSize;

    const total = await Artwork.countDocuments({});

    const artworks = await Artwork.find({}).skip(skip).limit(pageSize);

    const result = {
      total,
      artworks,
    };

    return Response.json(result);
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    const { userId } = sessionUser;
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const formData = await request.formData();

    //Access all values from  images
    const images = formData
      .getAll("images")
      .filter((image) => image.name !== "");

    //Create artworkData object for database

    const artworkData = {
      admin: userId,
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      is_lands: formData.get("is_lands"),
      orig_avail: formData.get("orig_avail"),
      orig_price: formData.get("orig_price"),
      orig_subst: formData.get("orig_subst"),
      orig_dimen: formData.get("orig_dimen"),

      descriptive_words: formData.get("descriptive_words"),
    };
    // Upload images to Cloudinary
    const imageUploadPromises = [];

    for (const image of images) {
      const imageBuffer = await image.arrayBuffer();
      const imageArray = new Uint8Array(imageBuffer);
      const imageData = Buffer.from(imageArray);

      // Convert the image data to base64
      const imageBase64 = imageData.toString("base64");

      // Make request to upload to cloudinary
      const result = await cloudinary.uploader.upload(
        `data:image/jpg;base64,${imageBase64}`,
        {
          folder: "fuscosart",
        }
      );

      imageUploadPromises.push(result.secure_url);

      // Wait for all images to upload
      const uploadedImages = await Promise.all(imageUploadPromises);

      //Add uploaded images to artworkData
      artworkData.images = uploadedImages;
    }

    const newArtwork = new Artwork(artworkData);
    await newArtwork.save();

    return Response.redirect(
      `${process.env.NEXTAUTH_URL}/artworks/${newArtwork._id}`
    );

    //return new Response(JSON.stringify({ message: 'Success' }), {
    //  status: 201,
    //});
  } catch (error) {
    return new Response("Failed to add artwork", { status: 500 });
  }
};
