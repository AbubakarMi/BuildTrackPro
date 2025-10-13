
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function RegisterPage() {
  const bgImage = PlaceHolderImages.find(
    (img) => img.id === 'login-background'
  );

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex min-h-screen items-center justify-center py-12">
        <div className="mx-auto grid w-[450px] gap-6 p-4">
          <div className="grid gap-2 text-center">
            <div className="flex items-center justify-center gap-2 font-headline text-3xl font-bold">
              <HardHat className="h-8 w-8 text-primary" />
              <h1>BuildTrack Pro</h1>
            </div>
            <p className="text-balance text-muted-foreground">
              Create your company account to start managing your projects.
            </p>
          </div>
          <Card>
            <CardHeader>
                <CardTitle>Company &amp; Admin Details</CardTitle>
                <CardDescription>The user who creates the company account will be the administrator.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" placeholder="Acme Construction Inc." required />
                    </div>
                     <div className="grid gap-2">
                      <Label htmlFor="company-website">Company Website (Optional)</Label>
                      <Input id="company-website" placeholder="https://acmeconstruction.com" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="company-size">Company Size</Label>
                            <Select>
                                <SelectTrigger id="company-size">
                                    <SelectValue placeholder="Select size" />
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
                            <Label htmlFor="your-role">Your Role</Label>
                             <Select>
                                <SelectTrigger id="your-role">
                                    <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="owner">Owner / Founder</SelectItem>
                                    <SelectItem value="pm">Project Manager</SelectItem>
                                    <SelectItem value="admin">Administrator</SelectItem>
                                     <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <hr className="my-2"/>
                    <div className="grid gap-2">
                      <Label htmlFor="full-name">Your Full Name</Label>
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
                      <Link href="/dashboard">Create Account</Link>
                    </Button>
                </div>
            </CardContent>
          </Card>
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
