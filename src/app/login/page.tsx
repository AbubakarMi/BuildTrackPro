'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HardHat } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
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
import { SolutionShowcase } from '@/components/solution-showcase';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

type LoginFormValues = z.infer<typeof formSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const bgImage = PlaceHolderImages.find(img => img.id === 'login-background');


  const onSubmit = (data: LoginFormValues) => {
    // In a real app, you'd handle authentication here.
    // For now, we'll just show a success toast and redirect.
    console.log(data);
    toast({
      title: 'Login Successful',
      description: 'Redirecting to your dashboard...',
    });
    router.push('/dashboard');
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
              Enter your email below to login to your account
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel>Password</FormLabel>
                    </div>
                    <FormControl>
                      <Input type="password" placeholder='********' {...field} />
                    </FormControl>
                    <FormMessage />
                     <div className="text-right text-sm">
                        <Link
                            href="/forgot-password"
                            className="underline"
                        >
                            Forgot your password?
                        </Link>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
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
