import { use, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { fetchUser } from "@/utils/requests";

const NavbarMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setAuthProviders();
  }, []);

  return (
    <div>
      {/* <!-- Mobile menu button--> */}

      <button
        type="button"
        id="mobile-dropdown-button"
        className="relative inline-flex items-center justify-center rounded-md p-2 
							text-cyan-500 hover:bg-cyan-700 
							hover:text-white focus:outline-none focus:ring-2 focus:ring-inset 
							focus:ring-white md:hidden"
        aria-controls="mobile-menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>

        {/* <!-- svg--> */}

        <svg
          className="block h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}

      {isMobileMenuOpen && (
        <div id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 lg:hidden">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-cyan-600" : " text-white"
              } block rounded-md px-3 py-2 text-base font-medium`}
            >
              Home
            </Link>
            <Link
              href="/artworks"
              className={`${
                pathname === "/artworks" ? "text-cyan-600" : " text-white"
              } block rounded-md px-3 py-2 text-base font-medium`}
            >
              Art Gallery
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === "/artworks" ? "text-cyan-600" : " text-white"
              } block rounded-md px-3 py-2 text-base font-medium`}
            >
              About
            </Link>

            {!session &&
              providers &&
              Object.values(providers).map((provider, index) => (
                <button
                  onClick={() => signIn(provider.id)}
                  key={index}
                  className="flex items-center text-white bg-cyan-600 hover:bg-cyan-900 hover:text-white rounded-md px-3 py-2"
                >
                  <span>Login or Register</span>
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobileMenu;
