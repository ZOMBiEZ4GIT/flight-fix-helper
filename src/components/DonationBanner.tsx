
import { useState, useEffect } from "react";
import { X, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

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
          <div className="max-w-3xl mx-auto bg-[#E5DEFF] border border-primary/20 rounded-lg shadow-md">
            <div className="p-6 relative">
              <button
                onClick={onClose}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 rounded-full p-1 hover:bg-gray-100"
                aria-label="Close donation banner"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="text-center pr-6">
                <div className="flex items-center justify-center mb-3">
                  <Coffee className="h-6 w-6 text-primary mr-2" />
                  <h3 className="font-medium text-gray-800 text-lg">Support This Service</h3>
                </div>
                <p className="text-gray-700 mb-4 text-base">
                  I'm self-hosting this service to help Kiwis understand and claim their consumer rights. 
                  If you successfully receive compensation using this tool, please consider supporting 
                  the ongoing costs with a small donation.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a 
                    href="https://ko-fi.com/flightfixer" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-primary text-white px-6 py-2.5 rounded-md hover:bg-primary/90 transition-colors font-medium"
                  >
                    Support on Ko-fi
                  </a>
                  <Button 
                    onClick={onClose}
                    variant="outline"
                    className="px-6 py-2.5 border-gray-300"
                  >
                    Thanks, but no thanks
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DonationBanner;
