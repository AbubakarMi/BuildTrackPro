'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

import { HardHat, ArrowRight, KeyRound } from 'lucide-react';
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

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

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  otp: z.string().optional(),
  newPassword: z.string().optional(),
  confirmPassword: z.string().optional(),
}).refine(data => {
    if (data.otp !== undefined) {
        return data.newPassword === data.confirmPassword;
    }
    return true;
}, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type ForgotPasswordFormValues = z.infer<typeof formSchema>;

function SolutionShowcase() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % solutionSteps.length);
        }, 5000);
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

export default function ForgotPasswordPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const bgImage = PlaceHolderImages.find(img => img.id === 'login-background');


  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      otp: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onEmailSubmit = (data: ForgotPasswordFormValues) => {
    // In a real app, you'd send the OTP here.
    console.log('Sending OTP to:', data.email);
    setEmail(data.email);
    toast({
      title: 'OTP Sent',
      description: `An OTP has been sent to ${data.email}.`,
    });
    setStep(2);
  };
  
  const onOtpSubmit = (data: ForgotPasswordFormValues) => {
    // In a real app, you'd verify the OTP and reset the password.
    console.log('Verifying OTP and resetting password:', data);
    toast({
      title: 'Password Reset Successful',
      description: 'Your password has been changed. Please log in.',
    });
    router.push('/login');
  };

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex min-h-screen items-center justify-center py-12">
        <div className="mx-auto grid w-[380px] gap-6">
          <div className="grid gap-2 text-center">
             <div className="flex items-center justify-center gap-2 font-headline text-3xl font-bold">
                <HardHat className="h-8 w-8 text-primary" />
                <h1>BuildTrack Pro</h1>
            </div>
            <p className="text-balance text-muted-foreground">
              {step === 1 ? 'Enter your email to receive an OTP.' : 'Check your email for the OTP.'}
            </p>
          </div>
          
          {step === 1 ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onEmailSubmit)} className="grid gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="m@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Send OTP Code
                </Button>
              </form>
            </Form>
          ) : (
             <Form {...form}>
              <form onSubmit={form.handleSubmit(onOtpSubmit)} className="grid gap-4">
                 <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>OTP Code</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="123456"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="********" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm New Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="********" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Reset Password
                </Button>
              </form>
            </Form>
          )}

          <div className="mt-4 text-center text-sm">
            Remember your password?{' '}
            <Link href="/login" className="underline">
              Log in
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
