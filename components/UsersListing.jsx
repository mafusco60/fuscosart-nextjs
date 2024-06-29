import Image from "next/image";
import profileDefault from "@/assets/images/profile.png";
import { Link } from "next/link";

const UsersListing = ({ user }) => {
  return (
    <div>
      <section className="container m-auto mb-4 pt-4">
        <div>
          <div className="bg-white   shadow-sm rounded-md border  ">
            <div className="flex ">
              <Image
                className="flex h-10 w-10 rounded-full mr-10 "
                src={user.image || profileDefault}
                width={200}
                height={200}
                alt="User"
              />
              <span className="font-bold flex ">Name:***</span>
              {user.username}
              <span className="font-bold flex ">__Email:***</span>
              {user.email}
              <span className="font-bold flex ">__ID:***</span>
              {user._id}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsersListing;
