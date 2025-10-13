import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HardHat } from 'lucide-react';
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

export default function RegisterPage() {
  const bgImage = PlaceHolderImages.find(
    (img) => img.id === 'login-background'
  );

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex min-h-screen items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-6">
          <div className="grid gap-2 text-center">
            <div className="flex items-center justify-center gap-2 font-headline text-3xl font-bold">
              <HardHat className="h-8 w-8 text-primary" />
              <h1>BuildTrack Pro</h1>
            </div>
            <p className="text-balance text-muted-foreground">
              Create your account and start managing your projects.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" placeholder="Acme Inc." required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="full-name">Your Name</Label>
              <Input id="full-name" placeholder="John Doe" required />
            </div>
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
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" asChild>
              <Link href="/dashboard">Create an account</Link>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="/login" className="underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        {bgImage && (
          <Image
            src={bgImage.imageUrl}
            alt="Construction site"
            width="1200"
            height="1800"
            className="h-full w-full object-cover dark:brightness-[0.3] dark:grayscale"
            data-ai-hint={bgImage.imageHint}
          />
        )}
      </div>
    </div>
  );
}
