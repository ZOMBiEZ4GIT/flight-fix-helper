
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const airlineContacts = [
  {
    name: "Air New Zealand",
    email: "customerrelations@airnz.co.nz",
    website: "https://www.airnewzealand.co.nz"
  },
  {
    name: "Jetstar Airways",
    email: "customer.care@jetstar.com",
    website: "https://www.jetstar.com"
  },
  {
    name: "Qantas",
    email: "customer.care@qantas.com.au",
    website: "https://www.qantas.com"
  },
  {
    name: "Virgin Australia",
    email: "guest.contact@virginaustralia.com",
    website: "https://www.virginaustralia.com"
  },
  {
    name: "Singapore Airlines",
    email: "nz_feedback@singaporeair.com.sg",
    website: "https://www.singaporeair.com"
  },
  {
    name: "Emirates",
    email: "new.zealand@emirates.com",
    website: "https://www.emirates.com"
  }
];

const Airlines = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Airline Contact Information</h1>
      <p className="text-gray-600 mb-8">
        Here are the contact details for major airlines operating in New Zealand. Use these email 
        addresses to submit your compensation claims.
      </p>
      
      <div className="grid gap-6">
        {airlineContacts.map((airline) => (
          <Card key={airline.name} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {airline.name}
                  </h2>
                  <div className="flex items-center text-primary space-x-2">
                    <Mail className="h-4 w-4" />
                    <a 
                      href={`mailto:${airline.email}`}
                      className="text-primary hover:underline"
                    >
                      {airline.email}
                    </a>
                  </div>
                </div>
                <a
                  href={airline.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-primary"
                >
                  Visit Website →
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Note: These contact details are subject to change. If you find any outdated information,
          please let us know.
        </p>
      </div>
    </div>
  );
};

export default Airlines;
