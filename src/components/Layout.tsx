
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Plane, Coffee, Bitcoin } from "lucide-react";
import DonationBanner from "./DonationBanner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Plane className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold">FlightRights.nz</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === "/" ? "text-primary" : "text-gray-600"
                }`}
              >
                Generate Letter
              </Link>
              <Link
                to="/rights"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === "/rights" ? "text-primary" : "text-gray-600"
                }`}
              >
                Your Rights
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <DonationBanner />

      <main className="pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="mt-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.buymeacoffee.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <Coffee className="h-5 w-5 mr-2" />
                <span>Buy me a coffee</span>
              </a>
              <a
                href="bitcoin:YourBitcoinAddress"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <Bitcoin className="h-5 w-5 mr-2" />
                <span>Donate Bitcoin</span>
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Disclaimer: This website provides general information and is not legal advice.
              For specific legal advice, please consult a qualified professional.
            </p>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} FlightRights.nz - All rights reserved.</p>
            <p className="text-sm text-gray-500">
              This is a free service run without ads to help New Zealanders claim their consumer rights. 
              If you found this helpful, please consider supporting the hosting costs.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
