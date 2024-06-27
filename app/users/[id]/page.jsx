"use client";
import UserProfileCard from "@/components/UserProfileCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchUser } from "@/utils/requests";
import Spinner from "@/components/Spinner";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export const dynamic = "force-dynamic";

const UserPage = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!id) return;
      try {
        const user = await fetchUser(id);
        setUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user === null) {
      fetchUserData();
    }
  }, [id, user]);

  if (!user && !loading) {
    console.log(user, "user");
    return (
      <h1 className="text-center text-2xl font-bold mt-10">User Not Found</h1>
    );
  }

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && user && (
        <>
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/"
                className="text-cyan-500 
                hover:text-cyan-600 flex items-center"
              >
                <FaArrowAltCircleLeft className="mr-2" />
                Back to Home
              </Link>
            </div>
          </section>

          <section className="bg-cyan-50">
            <div className="container m-auto py-10 px-6">
              <div
                className="grid grid-cols-1 md:grid-cols-65/35 
              w-full gap-6"
              >
                <UserProfileCard user={user} />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default UserPage;
