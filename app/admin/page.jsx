import { getAdminStatus } from "@/utils/getAdminStatus"


const AdminPage = () => {

    const userId = getAdminStatus();
    console.log(userId, "userId - page");
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage