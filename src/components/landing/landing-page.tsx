
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Building, Hammer, Paintbrush, HardHat, Phone, Mail, MapPin, Loader2, CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useToast } from '@/hooks/use-toast';

const services = [
  {
    icon: <Building className="w-12 h-12 text-primary" />,
    title: 'Expense Tracking',
    description:
      "Log every purchase and site expense to get a real-time view of your project's financial health.",
  },
  {
    icon: <Hammer className="w-12 h-12 text-primary" />,
    title: 'Material Management',
    description:
      'Track material usage from purchase to installation, reducing waste and preventing budget overruns.',
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-primary" />,
    title: 'Labor Cost Control',
    description:
      'Manage worker payments and audit logs to ensure accurate compensation and labor budget adherence.',
  },
];

const projects = [
  { id: 'project-image-1', name: 'Downtown Tower', category: 'Commercial' },
  { id: 'project-image-2', name: 'Suburbia Gardens', category: 'Residential' },
  { id: 'project-image-3', name: 'Westside Bridge', category: 'Infrastructure' },
  {
    id: 'project-image-4',
    name: 'Modern Office Complex',
    category: 'Commercial',
  },
  { id: 'project-image-1', name: 'Downtown Tower 2', category: 'Commercial' },
];

const contactFormSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Your message should be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'login-background'
  );
  const projectImages = projects
    .map((p) => PlaceHolderImages.find((i) => i.id === p.id))
    .filter(Boolean);
  const aboutImage = PlaceHolderImages.find(i => i.id === 'project-image-4');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onContactSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Contact form submitted:', data);
    setIsSubmitting(false);
    setSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 px-4 md:px-6 bg-background/80 backdrop-blur-sm">
        <Link
          href="#"
          className="flex items-center gap-2 font-headline text-2xl font-bold"
        >
          <HardHat className="w-8 h-8 text-primary" />
          <span>BuildTrack Pro</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="#services"
            className="hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#projects"
            className="hover:text-primary transition-colors"
          >
            Use Cases
          </Link>
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link
            href="#contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className='flex items-center gap-2'>
          <Button variant="ghost" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/pricing">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section id="hero" className="relative h-dvh min-h-[600px] w-full pt-20">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Hero background"
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
                Stop Losing Money on Untracked Project Costs
              </h1>
              <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md">
                The all-in-one platform for constructors. Track expenses, manage
                materials, and control labor costs to protect your bottom line.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/pricing">Get Started For Free</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/request-demo">Request a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">
                    A Better Way to Manage Your Projects
                </h2>
                <p className="text-lg text-muted-foreground mt-4">
                    BuildTrack Pro provides the tools you need to keep your projects on time and under budget, eliminating financial surprises.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="items-center">
                    {service.icon}
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">
                        Built for Any Project
                    </h2>
                    <p className="text-lg text-muted-foreground mt-4">
                        From residential homes to large-scale infrastructure, BuildTrack Pro adapts to your project's unique needs.
                    </p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {projectImages.map((img, index) => (
                            img && (
                                <CarouselItem key={img.id + index} className="md:basis-1/2 lg:basis-1/3">
                                    <Card className="overflow-hidden group h-full">
                                        <div className="relative h-80">
                                            <Image
                                                src={img.imageUrl}
                                                alt={projects[index].name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                data-ai-hint={img.imageHint}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        </div>
                                        <CardContent className="p-4 absolute bottom-0 w-full">
                                            <h3 className="text-xl font-bold text-primary-foreground">
                                                {projects[index].name}
                                            </h3>
                                            <p className="text-md text-primary-foreground/80">
                                                {projects[index].category}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            )
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                </Carousel>
            </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
                From Blueprint to Bottom Line
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                BuildTrack Pro was founded by Nubenta Technology Limited to solve a critical problem in the construction industry: significant financial losses due to untracked expenses and poor budget management.
              </p>
              <p className="text-muted-foreground text-lg">
                Our mission is to empower construction companies and managers with a powerful, yet intuitive, platform that bridges the gap between the job site and the balance sheet. We're committed to providing the tools you need to build more efficiently, control costs with precision, and drive profitability on every project.
              </p>
            </div>
            {aboutImage && (
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={aboutImage.imageUrl}
                  alt="A team of construction professionals reviewing blueprints"
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Contact Us</h2>
                <p className="text-lg text-muted-foreground mt-4">
                    Have a question or want to see a demo? Get in touch with our team.
                </p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
              <Card>
                <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                      <h3 className="text-xl font-semibold">Thank You!</h3>
                      <p className="text-muted-foreground">Your message has been sent. We'll be in touch soon.</p>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onContactSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="jane@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Message</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Tell us how we can help..." rows={5} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Submit
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-4 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Our Office</h4>
                    <p className="text-muted-foreground">
                      123 Innovation Drive, Suite 100
                      <br />
                      Tech City, USA 54321
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-4 rounded-lg">
                    <Mail className="w-6 h-6 " />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-muted-foreground">
                      support@buildtrack.pro
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-4 rounded-lg">
                    <Phone className="w-6 h-6 " />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <p className="text-muted-foreground">(123) 555-0123</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 py-12">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col gap-2">
                    <Link href="#" className="flex items-center gap-2 font-headline text-xl font-bold">
                        <HardHat className="w-7 h-7" />
                        <span>BuildTrack Pro</span>
                    </Link>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Product</h4>
                    <ul className="space-y-2 text-sm text-accent-foreground/80">
                        <li><Link href="#services" className="hover:text-primary transition-colors">Features</Link></li>
                        <li><Link href="#projects" className="hover:text-primary transition-colors">Use Cases</Link></li>
                        <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                        <li><Link href="/request-demo" className="hover:text-primary transition-colors">Demo</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Company</h4>
                    <ul className="space-y-2 text-sm text-accent-foreground/80">
                        <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                        <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Legal</h4>
                    <ul className="space-y-2 text-sm text-accent-foreground/80">
                        <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="border-t border-accent-foreground/20">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between text-sm text-accent-foreground/80">
                <p>&copy; {new Date().getFullYear()} BuildTrack Pro. All Rights Reserved.</p>
                <p>Powered by <a href="#" className="hover:text-primary transition-colors">Nubenta Technology Limited</a></p>
            </div>
        </div>
      </footer>
    </div>
  );
}
