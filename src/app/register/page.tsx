

'use client';

import React, { useState, useEffect } from 'react';
import { HardHat, Building, User, CreditCard, ArrowRight } from 'lucide-react';
import Step1_UserAccount from '@/components/register/step1-user-account';
import Step2_CompanyDetails from '@/components/register/step2-company-details';
import Step3_PlanSelection from '@/components/register/step3-plan-selection';
import Link from 'next/link';

const steps = [
  { id: 1, name: 'Create Account', icon: <User className="h-5 w-5" /> },
  { id: 2, name: 'Company Details', icon: <Building className="h-5 w-5" /> },
  { id: 3, name: 'Select Plan', icon: <CreditCard className="h-5 w-5" /> },
];

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
                            <div className={`h-10 ml-6 flex items-center transition-all duration-500 ${current === index ? 'opacity-100' : 'opacity-0'}`}>
                                <ArrowRight className={`w-6 h-6 text-primary transition-all duration-700 ${current === index ? 'scale-110 -rotate-90' : 'scale-100 -rotate-90'}`} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}


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
        <div className="mx-auto grid w-full max-w-2xl gap-6">
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
            <div className="mb-8 flex items-center justify-center max-w-md mx-auto sm:max-w-2xl">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:text-left">
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${currentStep >= step.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                                {step.icon}
                            </div>
                            <div className={`hidden sm:block ${currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                                <div className="text-sm font-medium">{step.name}</div>
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`flex-auto border-t-2 transition-colors duration-500 ease-in-out mx-2 ${currentStep > index + 1 ? 'border-primary' : 'border-muted'}`}></div>
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
