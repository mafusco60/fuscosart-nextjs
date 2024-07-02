import Image from "next/image";
import profileDefault from "@/assets/images/profile.png";
import { Link } from "next/link";

const UsersListing = ({ user, admin }) => {
  return (
    <div>
      <section className="container  mx-auto mb-4 pt-4 pr-4 grid grid-cols-15 gap-4">
        <div>
          <div className="bg-white  shadow-sm rounded-md border  ">
            <div className="ml-4  ">
              <div>
                <Image
                  className=" h-10 w-10 rounded-full mr-10 "
                  src={user.image || profileDefault}
                  width={200}
                  height={200}
                  alt="User"
                />
              </div>

              <div className=" grid grid-cols-subgrid gap-4 col-span-4   ">
                {user.username}
              </div>

              <div className=" grid grid-cols-subgrid gap-4 col-span-6 ">
                {user.email}
              </div>
              <div className=" grid grid-cols-subgrid gap-4 col-span-5 ">
                {user._id}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsersListing;
