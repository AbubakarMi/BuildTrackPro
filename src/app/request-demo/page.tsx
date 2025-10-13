
'use client';

import React from 'react';
import { HardHat } from 'lucide-react';
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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { SolutionShowcase } from '@/components/solution-showcase';



export default function RequestDemoPage() {
    const bgImage = PlaceHolderImages.find(img => img.id === 'login-background');
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
        {bgImage && (
            <Image
                src={bgImage.imageUrl}
                alt={bgImage.description}
                fill
                className="absolute inset-0 w-full h-full object-cover z-0 dark:brightness-[0.4] animate-zoom-in"
                data-ai-hint={bgImage.imageHint}
                priority
            />
        )}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="z-20 text-white w-full">
            <SolutionShowcase />
        </div>
      </div>
    </div>
  );
}
