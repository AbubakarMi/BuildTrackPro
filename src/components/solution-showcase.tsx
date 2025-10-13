'use client';

import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

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
];

export function SolutionShowcase() {
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
