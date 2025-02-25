
import { motion } from "framer-motion";
import { Shield, Info } from "lucide-react";

const Rights = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Know Your Rights</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Understand your rights as a passenger under New Zealand law and learn what compensation
          you may be entitled to.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-primary/10 rounded-full p-2">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Legal Framework</h2>
          </div>
          <div className="prose prose-gray">
            <p>
              Under the New Zealand Civil Aviation Act 1990 and Consumer Guarantees Act,
              passengers are protected against flight delays and cancellations.
            </p>
            {/* More content will be added in the next update */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-primary/10 rounded-full p-2">
              <Info className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Common Scenarios</h2>
          </div>
          <div className="prose prose-gray">
            <p>
              Learn about common delay scenarios and how much compensation you might
              be entitled to receive from different airlines.
            </p>
            {/* More content will be added in the next update */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Rights;
