import { getSessionUser } from '@/utils/getSessionUser';

const getAdminStatus = () => {
    user = getSessionUser(userId)
    const isAdmin = user.is_admin;
return (isAdmin)}

export default getAdminStatus