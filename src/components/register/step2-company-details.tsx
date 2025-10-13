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
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { countries, type State } from '@/lib/countries';
import React from 'react';

const formSchema = z.object({
  companyName: z.string().min(2, { message: 'Company name is required.' }),
  companyEmail: z.string().email({ message: 'Please enter a valid company email.' }),
  companyPhone: z.string().min(5, { message: 'Please enter a valid phone number.' }),
  companyAddress: z.string().min(5, { message: 'Company address is required.' }),
  city: z.string().min(2, { message: 'City is required.' }),
  state: z.string().min(1, { message: 'State or province is required.' }),
  country: z.string().min(2, { message: 'Country is required.' }),
  companyWebsite: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
  companySize: z.string().min(1, { message: 'Please select a company size.' }),
  yourRole: z.string().min(1, { message: 'Please select your role.' }),
});

type Step2FormValues = z.infer<typeof formSchema>;

interface Step2Props {
  onNext: (data: Step2FormValues) => void;
  onPrev: () => void;
  initialData: Partial<Step2FormValues>;
}

export default function Step2_CompanyDetails({ onNext, onPrev, initialData }: Step2Props) {
  const form = useForm<Step2FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const [states, setStates] = React.useState<State[]>([]);
  
  const selectedCountry = form.watch('country');

  React.useEffect(() => {
    if (selectedCountry) {
      const countryData = countries.find(c => c.code === selectedCountry);
      setStates(countryData?.states || []);
      // Reset state if country changes and current state is not in the new list of states
      if(countryData && !countryData.states.some(s => s.code === form.getValues('state'))){
        form.setValue('state', '');
      }
    } else {
      setStates([]);
    }
  }, [selectedCountry, form]);


  const onSubmit = (data: Step2FormValues) => {
    onNext(data);
  };

  return (
    <Card className='max-w-2xl mx-auto'>
      <CardHeader>
        <CardTitle>Company Information</CardTitle>
        <CardDescription>Tell us a bit more about your company.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Acme Construction Inc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <FormField
                control={form.control}
                name="companyEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="contact@acme.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="(123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <FormField
                control={form.control}
                name="companyAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main Street" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="New York" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {countries.map(country => (
                            <SelectItem key={country.code} value={country.code}>{country.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State / Province</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value} disabled={!states.length}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a state" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {states.map(state => (
                            <SelectItem key={state.code} value={state.code}>{state.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
             <FormField
              control={form.control}
              name="companyWebsite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Website (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://acmeconstruction.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Company Size</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201+">201+ employees</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="yourRole"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Your Role</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="owner">Owner / Founder</SelectItem>
                            <SelectItem value="pm">Project Manager</SelectItem>
                            <SelectItem value="admin">Administrator</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onPrev} className="w-full">
                Previous
              </Button>
              <Button type="submit" className="w-full">
                Next: Select Plan
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
