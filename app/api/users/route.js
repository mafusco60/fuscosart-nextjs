import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

// GET /api/users
export const GET = async (request) => {
  try {
    await connectDB();

    const users = await User.find({});

    const result = {
      users,
    };

    return Response.json(result);
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
