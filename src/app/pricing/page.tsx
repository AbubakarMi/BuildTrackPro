
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Free Trial",
    price: "$0",
    period: "/ 14 days",
    description: "Explore the basic features and see how BuildTrack Pro can help your business.",
    features: [
      "Track up to 1 project",
      "Basic expense tracking",
      "Limited material management",
      "Email support",
    ],
    buttonText: "Start 14-Day Trial",
    buttonVariant: "outline",
    href: "/register",
  },
  {
    name: "Basic",
    price: "$49",
    period: "/ month",
    description: "Perfect for small contractors and teams getting started.",
    features: [
      "Track up to 5 projects",
      "Full expense tracking",
      "Complete material management",
      "Worker payment logs",
      "Priority email support",
    ],
    buttonText: "Choose Basic",
    buttonVariant: "default",
    href: "/register",
    popular: true,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/ month",
    description: "For established businesses managing multiple large projects.",
    features: [
      "Track unlimited projects",
      "Advanced expense and budget forecasting",
      "AI-powered material suggestions",
      "AI overtime auditing",
      "Dedicated phone and email support",
    ],
    buttonText: "Choose Pro",
    buttonVariant: "outline",
    href: "/register",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Find the Right Plan for Your Business
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Start for free and scale up as you grow. All plans come with a 14-day free trial of our Pro features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col ${tier.popular ? 'border-primary border-2 shadow-xl' : ''}`}>
              {tier.popular && (
                <div className="bg-primary text-primary-foreground text-center py-1.5 text-sm font-semibold rounded-t-lg">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-headline">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div>
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant={tier.buttonVariant} className="w-full">
                  <Link href={tier.href}>{tier.buttonText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <p className="text-muted-foreground">
                Need more? <Link href="#contact" className="text-primary hover:underline">Contact us</Link> for enterprise solutions.
            </p>
        </div>
      </div>
    </div>
  );
}
