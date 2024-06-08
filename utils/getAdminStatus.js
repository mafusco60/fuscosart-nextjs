import { getSessionUser } from '@/utils/getSessionUser';

const getAdminStatus = async () => {
    user = await getSessionUser(userId)
    const isAdmin = user.is_admin;
return (isAdmin)}

export default getAdminStatus