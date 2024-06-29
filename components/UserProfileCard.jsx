import Image from "next/image";
import Link from "next/link";
import ArtworksSaved from "./ArtworksSaved";

const UserProfileCard = ({ user }) => {
  console.log(user, "user");
  return (
    <>
      <div className="p-10 rounded-xl shadow-lg bg-cyan-50 text-center justify-content">
        <div>
          <Image
            src={user.image}
            className="h-26 w-26 mb-2 rounded-full mx-auto"
            width={150}
            height={150}
          />
        </div>

        <div className="font-normal">
          <p className="text-lg">{user.username}</p>
          <p className="text-md">
            <Link href={`mailto:${user.email}`} className="text-blue-500">
              {user.email}
            </Link>
          </p>
          <Link href={`/users/${user._id}`}>
            <p className="text-xs mt-2 text-cyan-600">{user._id}</p>
          </Link>

          {user.is_admin && <p className="text-sm text-cyan-400">Admin</p>}
          <ArtworksSaved />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default UserProfileCard;
