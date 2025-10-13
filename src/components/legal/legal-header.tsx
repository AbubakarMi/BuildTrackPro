import { HardHat } from 'lucide-react';
import Link from 'next/link';

export default function LegalHeader() {
  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-2 font-headline text-2xl font-bold"
          >
            <HardHat className="w-8 h-8 text-primary" />
            <span>BuildTrack Pro</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <span className="text-sm font-medium text-primary hover:underline">
                Login
              </span>
            </Link>
             <Link href="/register">
              <span className="text-sm font-medium text-primary hover:underline">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
