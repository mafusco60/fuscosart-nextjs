import connectDB from "@/config/database";

export const getAdminStatus = async () => {
    await connectDB();
    const User = require("@/models/User");
    const user = await User.findOne({ role: "admin" });
    
    console.log(user);
    return user;
};
