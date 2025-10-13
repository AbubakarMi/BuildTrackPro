
'use client';

import React, { useState, useEffect } from 'react';
import { HardHat, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const solutionSteps = [
    {
        title: "Track Every Expense",
        description: "From materials to labor, log every dollar spent in real-time."
    },
    {
        title: "Manage Materials Efficiently",
        description: "Monitor inventory and usage to prevent waste and budget overruns."
    },
    {
        title: "Control Labor Costs",
        description: "Audit payment logs and manage overtime with AI-powered insights."
    }
]

function SolutionShowcase() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % solutionSteps.length);
        }, 5000); // Change step every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="max-w-2xl text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">
                Get a Personalized Look at Your Future Profitability
            </h2>
            <div className="flex flex-col gap-4">
                {solutionSteps.map((step, index) => (
                    <div key={index} className={`transition-all duration-700 ${current === index ? 'opacity-100' : 'opacity-40'}`}>
                        <div className="flex items-center gap-4">
                            <div className={`flex items-center justify-center h-12 w-12 rounded-full border-2 transition-colors duration-500 ${current === index ? 'border-primary bg-primary/20' : 'border-white/50'}`}>
                                <span className="text-xl font-bold">{index + 1}</span>
                            </div>
                            <div>
                                <h3 className={`text-xl font-semibold transition-colors duration-500 ${current === index ? 'text-primary' : 'text-white'}`}>{step.title}</h3>
                                <p className="text-white/80">{step.description}</p>
                            </div>
                        </div>
                        {index < solutionSteps.length - 1 && (
                             <div className="h-10 ml-6 flex items-center transition-opacity duration-500 opacity-0 data-[active=true]:opacity-100" data-active={current === index}>
                                <div className="h-full w-0.5 bg-primary/50 relative">
                                    <ArrowRight className="w-6 h-6 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 rotate-90 scale-0 data-[active=true]:scale-110" data-active={current === index} />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}


export default function RequestDemoPage() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex min-h-screen items-center justify-center p-4 py-12 sm:p-6 md:p-8">
        <div className="mx-auto grid w-full max-w-md gap-6">
          <div className="grid gap-2 text-center">
            <Link href="/" className="flex items-center justify-center gap-2 font-headline text-3xl font-bold">
                <HardHat className="h-8 w-8 text-primary" />
                <h1>BuildTrack Pro</h1>
            </Link>
            <h2 className="text-2xl font-semibold tracking-tight mt-4">Request a Personalized Demo</h2>
            <p className="text-balance text-muted-foreground">
              See how BuildTrack Pro can streamline your projects. Fill out the form below, and we'll contact you to schedule a demo.
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input id="full-name" placeholder="Jane Doe" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" placeholder="Acme Inc." required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@acme.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company-size">Company Size</Label>
                  <Select>
                    <SelectTrigger id="company-size">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201+">201+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Your Message (Optional)</Label>
                  <Textarea id="message" placeholder="Tell us what you're looking for..."/>
                </div>
                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
           <div className="mt-4 text-center text-sm">
            Ready to start now?{' '}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:flex items-center justify-center relative overflow-hidden p-10">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0 dark:brightness-[0.4]"
            src="https://cdn.coverr.co/videos/coverr-a-highway-in-the-city-4313/1080p.mp4"
        >
            Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="z-20 text-white w-full">
            <SolutionShowcase />
        </div>
      </div>
    </div>
  );
}
