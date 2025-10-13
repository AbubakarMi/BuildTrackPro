'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const tiers = [
  {
    name: 'Free Trial',
    price: '$0',
    period: '/ 14 days',
    value: 'trial',
    features: [
      'Track up to 1 project',
      'Basic expense tracking',
      'Limited material management',
    ],
  },
  {
    name: 'Basic',
    price: '$49',
    period: '/ month',
    value: 'basic',
    features: [
      'Track up to 5 projects',
      'Full expense tracking',
      'Complete material management',
      'Worker payment logs',
    ],
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/ month',
    value: 'pro',
    features: [
      'Track unlimited projects',
      'Advanced budget forecasting',
      'AI-powered material suggestions',
      'AI overtime auditing',
    ],
  },
];

const formSchema = z.object({
  plan: z.enum(['trial', 'basic', 'pro'], {
    required_error: 'You need to select a plan.',
  }),
});

type Step3FormValues = z.infer<typeof formSchema>;

interface Step3Props {
  onNext: (data: Step3FormValues) => void;
  onPrev: () => void;
  initialData: Partial<Step3FormValues>;
}

export default function Step3_PlanSelection({ onNext, onPrev, initialData }: Step3Props) {
  const form = useForm<Step3FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { plan: initialData.plan || 'basic' },
  });

  const onSubmit = (data: Step3FormValues) => {
    onNext(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose Your Plan</CardTitle>
        <CardDescription>Select the plan that best fits your company's needs.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="plan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      {tiers.map((tier) => (
                        <FormItem key={tier.value}>
                          <FormControl>
                            <RadioGroupItem value={tier.value} className="sr-only" />
                          </FormControl>
                          <FormLabel
                            className={cn(
                              'flex flex-col rounded-lg border-2 p-4 cursor-pointer hover:border-primary',
                              field.value === tier.value && 'border-primary'
                            )}
                          >
                            <div className="mb-4">
                                <span className="text-xl font-bold">{tier.name}</span>
                                <div className="mt-1">
                                    <span className="text-3xl font-bold">{tier.price}</span>
                                    <span className="text-sm text-muted-foreground">{tier.period}</span>
                                </div>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground flex-grow">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500"/>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-between gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onPrev} className="w-full">
                Previous
              </Button>
              <Button type="submit" className="w-full" asChild>
                <Link href="/dashboard">Create Account &amp; Complete</Link>
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
