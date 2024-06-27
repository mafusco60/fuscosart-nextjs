import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

// GET /api/users/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const user = await User.findById(params.id);
    console.log(user, "user");

    if (!user) return new Response("User Not Found", { status: 404 });

    return Response.json(user);
  } catch (error) {
    return new Response("Something Went Wrong", { status: 500 });
  }
};
