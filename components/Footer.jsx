import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyan-100 py-4 mt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Image src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0 text-cyan-950">
          <ul className="flex space-x-4">
            <li>
              <a href="/artworks">Artworks</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-cyan-500 mt-2 md:mt-0">
            &copy; {currentYear} Fusco's Art. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
