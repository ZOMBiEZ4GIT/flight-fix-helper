import { motion } from "framer-motion";
import { Shield, Info, AlertCircle, Clock, CreditCard, Scale } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          Under New Zealand law, you have significant rights when your flight is delayed or cancelled. 
          Learn about your entitlements and how to claim compensation.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-3 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-primary/10 rounded-full p-2">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Delay Rights</h2>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Compensation for delays over 2 hours
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Meal vouchers for extended delays
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Accommodation for overnight delays
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-primary/10 rounded-full p-2">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Compensation</h2>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Up to 10x ticket value for cancellations
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Additional expenses coverage
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Rebooking or refund options
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-primary/10 rounded-full p-2">
              <Scale className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Legal Framework</h2>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Civil Aviation Act 1990
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Consumer Guarantees Act
            </li>
          </ul>
        </motion.div>
      </div>

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
            <h2 className="text-xl font-semibold text-gray-900">Your Legal Protections</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="mb-4">
              The New Zealand Civil Aviation Act 1990 and Consumer Guarantees Act provide strong 
              protections for air passengers. Airlines must:
            </p>
            <ul className="space-y-2 mb-4">
              <li>Provide services with reasonable care and skill</li>
              <li>Complete flights within a reasonable time</li>
              <li>Offer fair compensation for delays and cancellations</li>
              <li>Communicate clearly about disruptions</li>
            </ul>
            <p className="mb-4">
              Under the Consumer Guarantees Act, services must be:
            </p>
            <ul className="space-y-2">
              <li>Provided with reasonable care and skill</li>
              <li>Fit for purpose</li>
              <li>Completed within a reasonable time</li>
              <li>Provided at a reasonable price</li>
            </ul>
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
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="delays">
              <AccordionTrigger>Flight Delays</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-gray-600">
                  <li>2+ hours: Meal and refreshment vouchers</li>
                  <li>4+ hours: Compensation up to $400</li>
                  <li>Overnight: Hotel accommodation and transfers</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cancellations">
              <AccordionTrigger>Flight Cancellations</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-gray-600">
                  <li>Full refund or alternative flight</li>
                  <li>Compensation up to 10x ticket value</li>
                  <li>Coverage for additional expenses (Uber, taxi to home/destination)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="overbooking">
              <AccordionTrigger>Overbooking</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-gray-600">
                  <li>Right to alternative flight</li>
                  <li>Compensation for inconvenience</li>
                  <li>Meal and accommodation if needed</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 glass-card rounded-2xl p-8"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-primary/10 rounded-full p-2">
            <AlertCircle className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Important Notes</h2>
        </div>
        <div className="prose prose-gray max-w-none">
          <ul className="space-y-4">
            <li>
              <strong>Time Limits:</strong> Claims should typically be made within 30 days of the 
              flight disruption.
            </li>
            <li>
              <strong>Documentation:</strong> Keep all relevant documents, including boarding passes, 
              receipts, and communication with the airline.
            </li>
            <li>
              <strong>Extraordinary Circumstances:</strong> Airlines may not be liable for disruptions 
              caused by extraordinary circumstances such as severe weather or security risks.
            </li>
            <li>
              <strong>Disputes Resolution:</strong> If unable to resolve directly with the airline, 
              you can contact the Disputes Tribunal or seek legal advice.
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Rights;
