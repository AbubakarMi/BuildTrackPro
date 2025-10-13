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
import { Building, Hammer, Paintbrush, HardHat, Phone, Mail, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

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

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'login-background'
  );
  const projectImages = projects
    .map((p) => PlaceHolderImages.find((i) => i.id === p.id))
    .filter(Boolean);
  const aboutImage = PlaceHolderImages.find(i => i.id === 'project-image-4');

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
            <Link href="/login">Get Started</Link>
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
                Streamline Your Construction Project Management
              </h1>
              <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md">
                The all-in-one platform for constructors. Track expenses, manage
                materials, and control labor costs with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/login">Sign Up for Free</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="#">Request a Demo</Link>
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
                Founded by a team of seasoned construction managers and innovative software engineers, BuildTrack Pro was born from a shared frustration: too many projects were losing profitability due to preventable administrative overhead and a lack of real-time financial insight. We knew there had to be a better way.
              </p>
              <p className="text-muted-foreground text-lg">
                Our mission is to empower constructors with a powerful, yet intuitive, platform that bridges the gap between the job site and the balance sheet. We're committed to providing the tools you need to build more efficiently, control costs with precision, and drive profitability on every project.
              </p>
            </div>
            {aboutImage && (
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
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
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                      <Input type="text" placeholder="Your Name" />
                      <Input type="email" placeholder="Your Email" />
                      <Textarea placeholder="Your message" rows={5} />
                      <Button type="submit" className="w-full">
                        Submit
                      </Button>
                    </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Office</h4>
                    <p className="text-muted-foreground">
                      123 Innovation Drive, Suite 100
                      <br />
                      Tech City, USA 54321
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Mail className="w-6 h-6 " />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-muted-foreground">
                      support@buildtrack.pro
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Phone className="w-6 h-6 " />
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-muted-foreground">(123) 555-0123</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
            <div>
                <div className="flex items-center gap-2 font-headline text-xl font-bold mb-4">
                    <HardHat className="w-7 h-7" />
                    <span>BuildTrack Pro</span>
                </div>
                <p className="text-sm text-accent-foreground/80">&copy; {new Date().getFullYear()} BuildTrack Pro. All Rights Reserved.</p>
            </div>
            <div>
                <h4 className="font-semibold mb-3">Product</h4>
                <ul className="space-y-2 text-sm text-accent-foreground/80">
                    <li><Link href="#services" className="hover:text-primary">Features</Link></li>
                    <li><Link href="#projects" className="hover:text-primary">Use Cases</Link></li>
                    <li><Link href="#" className="hover:text-primary">Pricing</Link></li>
                    <li><Link href="#" className="hover:text-primary">Demo</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <ul className="space-y-2 text-sm text-accent-foreground/80">
                    <li><Link href="#about" className="hover:text-primary">About Us</Link></li>
                    <li><Link href="#" className="hover:text-primary">Careers</Link></li>
                    <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-accent-foreground/80">
                    <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
                    <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
                </ul>
            </div>
        </div>
      </footer>
    </div>
  );
}
