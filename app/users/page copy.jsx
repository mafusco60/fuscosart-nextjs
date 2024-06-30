"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { fetchUser } from "@/utils/requests";
import Spinner from "@/components/Spinner";
import UsersListing from "@/components/UsersListing";
import Users from "@/components/Users";
export const dynamic = "force-dynamic";

const UsersPage = async () => {
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
    const fetchUsers = async () => {
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
    fetchUsers();
  }, []);

  return (
    <>
      {isAdmin ? (
        <section className="px-4 py-6">
          <div className="bg-white py-20">
            <h1 className="text-4xl font-extrabold text-cyan-900 sm:text-xl md:text-2xl text-center">
              Users
            </h1>

            <div
              className="max-w-7xl mx-auto  flex flex-col-1
				 items-start justify-start"
            >
              {users.length === 0 ? (
                <p>No users found</p>
              ) : (
                <div className="grid grid-col-1">
                  {users.map((user, index) => (
                    <UsersListing user={user} key={index} />
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
