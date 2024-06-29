"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { fetchUser } from "@/utils/requests";
import profileDefault from "@/assets/images/profile.png";
import Image from "next/image";

const NavbarAdminMenu = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);

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
  return (
    <>
      {" "}
      {!isAdmin ? (
        <button className="hidden"></button>
      ) : (
        <button
          type="button"
          className="text-white bg-cyan-500 hover:bg-cyan-600 px-3 py-2  relative rounded-full"
          id="admin-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => setIsAdminMenuOpen((prev) => !prev)}
        >
          {" "}
          ADMIN{" "}
        </button>
      )}
      {isAdminMenuOpen && (
        <div
          id="user-menu"
          className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-cyan ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="admin-menu-button"
          tabIndex="-1"
        >
          <Link
            href="/users"
            className="block px-4 py-2 text-sm text-cyan-700"
            role="users"
            tabIndex="-1"
            id="user-menu-item-0"
            onClick={() => setIsAdminMenuOpen(false)}
          >
            Users
          </Link>
          <Link
            href="/artworks/add"
            className="block px-4 py-2 text-sm text-cyan-700"
            role="add"
            tabIndex="-1"
            id="user-menu-item-1"
            onClick={() => setIsAdminMenuOpen(false)}
          >
            Add Artwork
          </Link>{" "}
          <Link
            href="/artworks"
            className="block px-4 py-2 text-sm text-cyan-700"
            role="edit-delete"
            tabIndex="-1"
            id="user-menu-item-0"
            onClick={() => setIsAdminMenuOpen(false)}
          >
            Edit / Delete
          </Link>
        </div>
      )}
    </>
  );
};

export default NavbarAdminMenu;
