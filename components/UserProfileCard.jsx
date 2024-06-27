import Image from "next/image";

const UserProfileCard = ({ user }) => {
  console.log(user, "user");
  return (
    <>
      <div className="p-10 rounded-xl shadow-lg bg-cyan-50 text-center justify-content">
        <div>
          <Image
            src={user.image}
            className="h-26 w-26 rounded-full mx-auto"
            width={26}
            height={26}
          />
        </div>

        {/* <div className=" w-full"> */}
        <div className="font-normal">
          <p className="text-sm">{user.username}</p>
          <p className="text-xs">{user.email}</p>
          {user.is_admin && <p className="text-sm text-cyan-400">Admin</p>}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default UserProfileCard;
