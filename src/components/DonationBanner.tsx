
import { useState, useEffect } from "react";
import { X, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DonationBannerProps {
  isVisible: boolean;
  onClose: () => void;
}

const DonationBanner = ({ isVisible, onClose }: DonationBannerProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 inset-x-0 z-50 px-4"
        >
          <div className="max-w-3xl mx-auto bg-primary/10 border border-primary/20 rounded-lg shadow-md">
            <div className="p-4 relative">
              <button
                onClick={onClose}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 rounded-full p-1 hover:bg-gray-100"
                aria-label="Close donation banner"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="text-center pr-6">
                <div className="flex items-center justify-center mb-2">
                  <Coffee className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-medium text-gray-800">Support This Service</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  I'm self-hosting this service to help Kiwis understand and claim their consumer rights. 
                  If you successfully receive compensation using this tool, please consider supporting 
                  the ongoing costs with a small donation.
                </p>
                <a 
                  href="https://ko-fi.com/flightfixer" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-primary text-white text-sm px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Support on Ko-fi
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DonationBanner;
