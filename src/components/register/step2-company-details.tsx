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

const formSchema = z.object({
  companyName: z.string().min(2, { message: 'Company name is required.' }),
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

  const onSubmit = (data: Step2FormValues) => {
    onNext(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Information</CardTitle>
        <CardDescription>Tell us a bit about your company.</CardDescription>
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
            <div className="grid grid-cols-2 gap-4">
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
            <div className="flex justify-between gap-4 pt-4">
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
