
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import DonationBanner from "@/components/DonationBanner";
import { useEffect, useState } from "react";

const Letter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDonation, setShowDonation] = useState(false);

  // Get the letter content from the location state
  const letterContent = location.state?.letterContent;

  useEffect(() => {
    // Show donation banner after a short delay
    const timer = setTimeout(() => {
      setShowDonation(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  const closeDonationBanner = () => {
    setShowDonation(false);
  };

  if (!letterContent) {
    // If no letter content is provided, redirect back to home
    navigate("/");
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={handleBack}
          variant="outline"
          className="mb-6 flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Form
        </Button>

        <h1 className="text-2xl font-bold mb-6">Your Compensation Letter</h1>

        <div className="relative">
          <Card className="mb-6">
            <CardContent className="p-6">
              <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded-lg">
                {letterContent}
              </pre>
            </CardContent>
          </Card>

          <div className="flex flex-col space-y-4">
            <Button
              onClick={() => {
                navigator.clipboard.writeText(letterContent);
                // You could use a toast here to notify the user
                alert("Letter copied to clipboard!");
              }}
              className="w-full"
            >
              Copy to Clipboard
            </Button>
            
            <Button
              variant="outline"
              onClick={handleBack}
              className="w-full"
            >
              Edit Letter
            </Button>
          </div>
          
          <DonationBanner isVisible={showDonation} onClose={closeDonationBanner} />
        </div>
      </motion.div>
    </div>
  );
};

export default Letter;
