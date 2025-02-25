
import { useState, useEffect } from "react";
import { X, Coffee, Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const DonationBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenBanner = localStorage.getItem("hasSeenDonationBanner");
    if (!hasSeenBanner) {
      setIsVisible(true);
    }
  }, []);

  const closeBanner = () => {
    localStorage.setItem("hasSeenDonationBanner", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-16 inset-x-0 z-50 bg-primary/10 border-b border-primary/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
            <button
              onClick={closeBanner}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-800 text-sm md:text-base">
                I'm self-hosting this service to help Kiwis understand and claim their consumer rights. 
                If you successfully receive compensation using this tool, please consider supporting 
                the ongoing costs with a small donation.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DonationBanner;
