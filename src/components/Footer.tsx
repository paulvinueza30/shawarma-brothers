/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerItems = [
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact-us" },
  ];

  return (
    <footer className="bg-customRed dark:bg-black border-t border-customRed pt-12 pb-6">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Shawarma Brothers
            </h3>
            <p className="text-white">
              &quot;The Heart of Shawarma, Wrapped for You.&quot;
            </p>
          </div>
          <div className="space-y-4 pl-16">
            {/* Added padding-left to adjust position */}
            <h4 className="text-lg font-medium text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-black transition duration-150 ease-in-out"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/shawarmabrothersportagetrailcrossing/"
                className="text-white hover:text-black transition duration-150 ease-in-out"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/explore/locations/551667251694193/shawarma-brothers/"
                className="text-white hover:text-black transition duration-150 ease-in-out"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white text-center text-white">
          <p>&copy; {currentYear} Shawarma Brothers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
