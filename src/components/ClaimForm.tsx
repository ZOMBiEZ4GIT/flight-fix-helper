
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import DonationBanner from "@/components/DonationBanner";

interface ClaimFormData {
  firstName: string;
  lastName: string;
  airline: string;
  bookingReference: string;
  dateOfDeparture: string;
  flightNumber: string;
  departureAirport: string;
  destinationAirport: string;
  totalClaimAmount: string;
}

const ClaimForm = () => {
  const [generatedLetter, setGeneratedLetter] = useState<string>("");
  const [showDonation, setShowDonation] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ClaimFormData>();

  const generateClaimLetter = (data: ClaimFormData) => {
    const letter = `Dear ${data.airline},

My flight was cancelled and I believe I am due compensation for the costs of delay.

My flight details are as follows:
Booking Reference: ${data.bookingReference}
Date of Departure: ${data.dateOfDeparture}
Flight Number: ${data.flightNumber}
Departure Airport: ${data.departureAirport}
Destination Airport: ${data.destinationAirport}

My rights under the NZ Civil Aviation Act 1990 are as follows:

Where your NZ domestic flight has been delayed or cancelled, you may be entitled under the Civil Aviation Act 1990 to claim the lesser of:

1. the amount of damage proved to have been sustained as a result of the delay; or
2. an amount representing 10 times the sum paid for the carriage.

The total claim amount I am requesting is: $${data.totalClaimAmount}.

I look forward to your prompt response on this matter.

Best regards,

${data.firstName} ${data.lastName}`;

    setGeneratedLetter(letter);
    setShowDonation(true);
  };

  const closeDonationBanner = () => {
    setShowDonation(false);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit(generateClaimLetter)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              {...register("firstName", { required: true })}
              placeholder="Enter your first name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              {...register("lastName", { required: true })}
              placeholder="Enter your last name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="airline">Airline</Label>
            <Input
              id="airline"
              {...register("airline", { required: true })}
              placeholder="Enter airline name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bookingReference">Booking Reference</Label>
            <Input
              id="bookingReference"
              {...register("bookingReference", { required: true })}
              placeholder="Enter booking reference"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfDeparture">Date of Departure</Label>
            <Input
              id="dateOfDeparture"
              type="date"
              {...register("dateOfDeparture", { required: true })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="flightNumber">Flight Number</Label>
            <Input
              id="flightNumber"
              {...register("flightNumber", { required: true })}
              placeholder="Enter flight number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="departureAirport">Departure Airport</Label>
            <Input
              id="departureAirport"
              {...register("departureAirport", { required: true })}
              placeholder="Enter departure airport"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="destinationAirport">Destination Airport</Label>
            <Input
              id="destinationAirport"
              {...register("destinationAirport", { required: true })}
              placeholder="Enter destination airport"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="totalClaimAmount">Total Claim Amount ($)</Label>
            <Input
              id="totalClaimAmount"
              type="number"
              {...register("totalClaimAmount", { required: true })}
              placeholder="Enter claim amount"
            />
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary text-white hover:bg-primary/90"
        >
          Generate Letter
        </Button>
      </form>

      {generatedLetter && (
        <div className="relative">
          <Card className="mt-8">
            <CardContent className="p-6">
              <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded-lg">
                {generatedLetter}
              </pre>
            </CardContent>
          </Card>
          <DonationBanner isVisible={showDonation} onClose={closeDonationBanner} />
        </div>
      )}
    </div>
  );
};

export default ClaimForm;
