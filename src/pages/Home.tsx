
import { motion } from "framer-motion";
import { PlaneTakeoff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Claim Your Flight Compensation
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Get the compensation you deserve for flight delays and cancellations in New Zealand.
                Generate a professional claim letter in minutes.
              </p>
              <Button
                className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 h-auto"
                onClick={() => {
                  document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start Your Claim <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 pointer-events-none animated-gradient" />
      </section>

      <section id="claim-form" className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-primary/10 rounded-full p-2">
                <PlaneTakeoff className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Compensation Claim Form</h2>
            </div>
            
            {/* Form implementation coming in the next update */}
            <p className="text-gray-600 text-center py-12">
              Form component will be implemented in the next step
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
