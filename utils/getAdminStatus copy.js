import connectDB from "@/config/database";
import { getSessionUser } from '@/utils/getSessionUser';
import User from '@/models/User';


export const getAdminStatus = async () => {
        await connectDB();
        const sessionUser = await getSessionUser();
/*         console.log(sessionUser, 'sessionUser');
 */        const isAdmin = await User.findOne ({_id: sessionUser.userId});
    console.log(isAdmin, 'isAdmin -- getAdminStatus');
    console.log(isAdmin.is_admin, 'isAdmin.is_admin -- getAdminStatus');
 return isAdmin.is_admin;
};





        