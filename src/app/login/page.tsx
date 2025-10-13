'use client';

import React, { useState, useEffect } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HardHat, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
                Your Path to Project Profitability
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

export default function LoginPage() {
  const bgImage = PlaceHolderImages.find(
    (img) => img.id === 'login-background'
  );

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex min-h-screen items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
             <div className="flex items-center justify-center gap-2 font-headline text-3xl font-bold">
                <HardHat className="h-8 w-8 text-primary" />
                <h1>BuildTrack Pro</h1>
            </div>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" asChild>
              <Link href="/dashboard">Login</Link>
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
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
