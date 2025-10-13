
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HardHat, Building, User, CreditCard } from 'lucide-react';
import Step1_UserAccount from '@/components/register/step1-user-account';
import Step2_CompanyDetails from '@/components/register/step2-company-details';
import Step3_PlanSelection from '@/components/register/step3-plan-selection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  { id: 1, name: 'Create Account', icon: <User className="h-5 w-5" /> },
  { id: 2, name: 'Company Details', icon: <Building className="h-5 w-5" /> },
  { id: 3, name: 'Select Plan', icon: <CreditCard className="h-5 w-5" /> },
];

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    companyName: '',
    companyWebsite: '',
    companySize: '',
    yourRole: '',
    plan: 'basic',
  });

  const bgImage = PlaceHolderImages.find(
    (img) => img.id === 'highway-animated-bg'
  );

  const handleNext = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Handle final submission
      console.log('Final Form Data:', { ...formData, ...data });
      // Here you would typically redirect to the dashboard or a confirmation page
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex min-h-screen items-center justify-center py-12">
        <div className="mx-auto grid w-[480px] max-w-full gap-6 p-4">
          <div className="grid gap-2 text-center">
            <div className="flex items-center justify-center gap-2 font-headline text-3xl font-bold">
              <HardHat className="h-8 w-8 text-primary" />
              <h1>BuildTrack Pro</h1>
            </div>
            <p className="text-balance text-muted-foreground">
              Create your company account to start managing your projects.
            </p>
          </div>

          <div className="w-full">
            <div className="mb-8 flex items-center justify-between">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= step.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                            {step.icon}
                        </div>
                        <div className={`ml-3 hidden sm:block ${currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                            <div className="text-sm font-medium">{step.name}</div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`flex-auto border-t-2 transition-colors duration-500 ease-in-out mx-4 ${currentStep > index + 1 ? 'border-primary' : 'border-muted'}`}></div>
                        )}
                    </div>
                ))}
            </div>

            <div className="min-h-[400px]">
              {currentStep === 1 && <Step1_UserAccount onNext={handleNext} initialData={formData} />}
              {currentStep === 2 && <Step2_CompanyDetails onNext={handleNext} onPrev={handlePrev} initialData={formData} />}
              {currentStep === 3 && <Step3_PlanSelection onNext={handleNext} onPrev={handlePrev} initialData={formData} />}
            </div>

             <div className="mt-4 text-center text-sm">
                Already have an account?{' '}
                <Link href="/login" className="underline">
                  Log in
                </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block overflow-hidden">
        {bgImage && (
          <Image
            src={bgImage.imageUrl}
            alt="Busy highway with cars"
            width="1200"
            height="1800"
            className="h-full w-full object-cover animate-zoom-in dark:brightness-[0.3]"
            data-ai-hint={bgImage.imageHint}
          />
        )}
      </div>
    </div>
  );
}
