
'use client';

import { useState } from 'react';
import { HardHat, Building, User, CreditCard } from 'lucide-react';
import Step1_UserAccount from '@/components/register/step1-user-account';
import Step2_CompanyDetails from '@/components/register/step2-company-details';
import Step3_PlanSelection from '@/components/register/step3-plan-selection';
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
      <div className="flex min-h-screen items-center justify-center p-4 py-12 sm:p-6 md:p-8">
        <div className="mx-auto grid w-full max-w-4xl gap-6">
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
            <div className="mb-8 flex items-center justify-between max-w-2xl mx-auto">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <div className="flex flex-col sm:flex-row items-center gap-2">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= step.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                                {step.icon}
                            </div>
                            <div className={`text-center sm:text-left ${currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                                <div className="text-sm font-medium">{step.name}</div>
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`flex-auto border-t-2 transition-colors duration-500 ease-in-out mx-2 sm:mx-4 ${currentStep > index + 1 ? 'border-primary' : 'border-muted'}`}></div>
                        )}
                    </React.Fragment>
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
      <div className="hidden bg-muted lg:block relative overflow-hidden">
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
        <div className="absolute inset-0 bg-black/20 z-10"></div>
      </div>
    </div>
  );
}
