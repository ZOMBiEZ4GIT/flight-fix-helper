
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const airlineContacts = [
  {
    name: "Air New Zealand",
    website: "https://www.airnewzealand.co.nz/feedback/refund/",
    linkText: "Air NZ Refunds"
  },
  {
    name: "Jetstar Airways",
    website: "https://www.jetstar.com/nz/en/contact-us#subcatid-36f193f3-7d9f-43e4-9643-534ab106c45a-29211c54-569a-437b-b2e0-b1bd8b128cd3",
    linkText: "Jetstar Ask Jess"
  },
  {
    name: "Qantas",
    website: "https://www.qantas.com/nz/en/manage-booking/refunds.html",
    linkText: "Qantas Refunds"
  },
  {
    name: "Virgin Australia",
    website: "https://www.virginaustralia.com/au/en/help/contact-us/feedback/",
    linkText: "Virgin Feedback"
  },
  {
    name: "Singapore Airlines",
    website: "https://www.singaporeair.com/get-help/changesandrefunds",
    linkText: "Singapore Airlines Refunds"
  },
  {
    name: "Emirates",
    website: "https://www.emirates.com/nz/english/help/forms/refund-request/",
    linkText: "Emirates Refunds"
  },
  {
    name: "Fiji Airways",
    website: "https://fijiairways.my.site.com/feedback/",
    linkText: "Fiji Airways Refunds"
  },
  {
    name: "Qatar Airways",
    website: "https://www.qatarairways.com/refund_form/customer-refund.html",
    linkText: "Qatar Refunds"
  }
];

const Airlines = () => {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrl(url);
      toast.success("URL copied to clipboard");
      setTimeout(() => setCopiedUrl(null), 2000);
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Airline Contact Information</h1>
      <p className="text-gray-600 mb-8">
        Here are direct refund links for major airlines operating in New Zealand. 
        Use these resources to submit your compensation claims.
      </p>
      
      <div className="grid gap-6">
        {airlineContacts.map((airline) => (
          <Card key={airline.name} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
                    {airline.name}
                  </h2>
                </div>

                <div className="mt-2 md:mt-0 flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <a
                      href={airline.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center space-x-1 text-primary hover:underline font-medium"
                    >
                      <span>{airline.linkText}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0"
                      onClick={() => copyToClipboard(airline.website)}
                      aria-label="Copy URL"
                    >
                      {copiedUrl === airline.website ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 hidden md:block">
                    {airline.name === "Jetstar Airways" && "Use the Ask Jess virtual assistant"}
                    {airline.name === "Qantas" && "Fill in 'Apply for your refund' section"}
                    {airline.name === "Virgin Australia" && "Submit request under Feedback section"}
                    {airline.name === "Fiji Airways" && "Select Refund Request option"}
                  </p>
                </div>
              </div>
              <div className="md:hidden mt-2">
                <p className="text-xs text-gray-500">
                  {airline.name === "Jetstar Airways" && "Use the Ask Jess virtual assistant"}
                  {airline.name === "Qantas" && "Fill in 'Apply for your refund' section"}
                  {airline.name === "Virgin Australia" && "Submit request under Feedback section"}
                  {airline.name === "Fiji Airways" && "Select Refund Request option"}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Note: These refund links are subject to change. If you find any outdated information,
          please let us know.
        </p>
      </div>
    </div>
  );
};

export default Airlines;
