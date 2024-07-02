"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { fetchUser, fetchUsers } from "@/utils/requests";
import Spinner from "@/components/Spinner";
import UsersListing from "@/components/UsersListing";
import Users from "@/components/Users";
import Link from "next/link";
export const dynamic = "force-dynamic";

const UsersPage = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);

  // check if user is admin
  useEffect(() => {
    const fetchUserData = async () => {
      if (!session) return;
      try {
        const user = await fetchUser(session.user.id);
        setUser(user);
        setIsAdmin(user.is_admin);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUserData();
  }, [session]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const res = await fetch(`/api/users?`);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsersData();
  }, []);

  return (
    <>
      {isAdmin ? (
        <section className="px-4 py-6">
          <div className="bg-white py-20">
            <h1 className="text-4xl font-extrabold text-cyan-900 sm:text-xl md:text-2xl ">
              Users
            </h1>

            <div
              className="max-w-7xl mx-auto  flex flex-col-1
				 items-start justify-start"
            >
              {users.length === 0 ? (
                <p>No users found</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {users.map((user, index) => (
                    <Link href={`/users/${user._id}`} key={index}>
                      <UsersListing user={user} admin={isAdmin} key={index} />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <p className="text-center text-rose-600 p-4 mt-4 shadow-lg">
          You are not authorized to view this page
        </p>
      )}
    </>
  );
};

export default UsersPage;
