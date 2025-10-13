import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Hammer, Paintbrush, HardHat, Phone, Mail, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JSX, SVGProps } from 'react';

const services = [
  {
    icon: <Building className="w-12 h-12 text-primary" />,
    title: 'Expense Tracking',
    description: 'Log every purchase and site expense to get a real-time view of your project\'s financial health.',
  },
  {
    icon: <Hammer className="w-12 h-12 text-primary" />,
    title: 'Material Management',
    description: 'Track material usage from purchase to installation, reducing waste and preventing budget overruns.',
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-primary" />,
    title: 'Labor Cost Control',
    description: 'Manage worker payments and audit logs to ensure accurate compensation and labor budget adherence.',
  },
];

const projects = [
    { id: 'project-image-1', name: 'Downtown Tower', category: 'Commercial' },
    { id: 'project-image-2', name: 'Suburbia Gardens', category: 'Residential' },
    { id: 'project-image-3', name: 'Westside Bridge', category: 'Infrastructure' },
    { id: 'project-image-4', name: 'Modern Office Complex', category: 'Commercial' },
]

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'login-background');
  const projectImages = projects.map(p => PlaceHolderImages.find(i => i.id === p.id)).filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 px-4 md:px-6 bg-background/80 backdrop-blur-sm">
        <Link href="#" className="flex items-center gap-2 font-headline text-2xl font-bold">
          <HardHat className="w-8 h-8 text-primary" />
          <span>BuildTrack Pro</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#services" className="text-lg font-medium hover:text-primary transition-colors">Services</Link>
          <Link href="#projects" className="text-lg font-medium hover:text-primary transition-colors">Projects</Link>
          <Link href="#about" className="text-lg font-medium hover:text-primary transition-colors">About</Link>
          <Link href="#contact" className="text-lg font-medium hover:text-primary transition-colors">Contact</Link>
        </nav>
        <Button asChild>
          <Link href="/login">Get Started</Link>
        </Button>
      </header>

      <main className="flex-1">
        <section id="hero" className="relative h-[80vh] min-h-[500px] w-full">
            {heroImage && 
                <Image
                    src={heroImage.imageUrl}
                    alt="Hero background"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={heroImage.imageHint}
                />
            }
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
            <div className="bg-black/50 p-8 rounded-lg">
                <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
                    Take Control of Your Construction Costs
                </h1>
                <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8">
                    Stop losing money on untracked expenses. Track material usage, worker payments, and forecast your budget with precision.
                </p>
                <Button size="lg" asChild>
                    <Link href="#contact">Request a Quote</Link>
                </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Features for Constructors</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="items-center">
                    {service.icon}
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Recent Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projectImages.map((img, index) => img && (
                        <Card key={img.id} className="overflow-hidden group">
                            <div className="relative h-64">
                                <Image 
                                    src={img.imageUrl} 
                                    alt={projects[index].name} 
                                    fill 
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    data-ai-hint={img.imageHint}
                                />
                            </div>
                            <CardContent className="p-4">
                               <h3 className="text-lg font-bold">{projects[index].name}</h3>
                               <p className="text-sm text-muted-foreground">{projects[index].category}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">About BuildTrack Pro</h2>
              <p className="text-muted-foreground text-lg mb-4">
                With over 20 years of experience in the construction industry, we have a proven track record of delivering high-quality projects on time and on budget. Our team of experts is dedicated to excellence and client satisfaction.
              </p>
              <p className="text-muted-foreground text-lg">
                We believe in building strong relationships with our clients, based on trust, transparency, and communication. Let us bring our expertise to your next project.
              </p>
            </div>
            {PlaceHolderImages.find(i => i.id === 'project-image-1') && 
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                    src={PlaceHolderImages.find(i => i.id === 'project-image-1')?.imageUrl as string} 
                    alt="About us" 
                    fill 
                    className="object-cover" 
                    data-ai-hint={PlaceHolderImages.find(i => i.id === 'project-image-1')?.imageHint}
                />
              </div>
            }
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Get in Touch</h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Request a Quote</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md border" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md border" />
                            <textarea placeholder="Tell us about your project" rows={5} className="w-full p-3 rounded-md border"></textarea>
                            <Button type="submit" className="w-full">Submit Request</Button>
                        </form>
                    </div>
                    <div className="space-y-6">
                         <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-primary mt-1"/>
                            <div>
                                <h4 className="font-semibold">Our Office</h4>
                                <p className="text-muted-foreground">123 Construction Ave, Suite 100<br/>Metropolis, USA 12345</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-primary mt-1"/>
                            <div>
                                <h4 className="font-semibold">Email Us</h4>
                                <p className="text-muted-foreground">contact@buildtrack.pro</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-primary mt-1"/>
                            <div>
                                <h4 className="font-semibold">Call Us</h4>
                                <p className="text-muted-foreground">(123) 456-7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <footer className="bg-accent text-accent-foreground py-8">
        <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center items-center gap-2 font-headline text-xl font-bold mb-4">
                <HardHat className="w-7 h-7" />
                <span>BuildTrack Pro</span>
            </div>
            <p>&copy; {new Date().getFullYear()} BuildTrack Pro. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
