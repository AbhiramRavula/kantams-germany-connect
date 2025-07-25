import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Award,
  Heart,
  Briefcase,
  GraduationCap,
  FileText,
  MessageSquare,
  Star
} from 'lucide-react';
import Layout from '@/components/Layout';
import heroHealthcare from '@/assets/hero-healthcare.jpg';
import successStory from '@/assets/success-story.jpg';
import germanyOpportunity from '@/assets/germany-opportunity.jpg';

const Index = () => {
  const stats = [
    { number: '2000+', label: 'Successful Placements', icon: Users },
    { number: '50+', label: 'Partner Hospitals', icon: Heart },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '95%', label: 'Success Rate', icon: CheckCircle },
  ];

  const services = [
    {
      icon: Heart,
      title: 'Nursing Migration',
      description: 'Specialized programs for nurses seeking opportunities in German healthcare system.',
      link: '/nursing-ausbildung'
    },
    {
      icon: Briefcase,
      title: 'Skilled Worker VISA',
      description: 'Complete assistance for skilled professionals across various sectors.',
      link: '/visas'
    },
    {
      icon: GraduationCap,
      title: 'Ausbildung Programs',
      description: 'Vocational training opportunities in Germany with guaranteed job placement.',
      link: '/nursing-ausbildung'
    },
    {
      icon: FileText,
      title: 'Document Processing',
      description: 'End-to-end support for qualification recognition and visa documentation.',
      link: '/contact'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Registered Nurse',
      content: 'Kantams made my dream of working in Germany a reality. Their support throughout the process was exceptional.',
      rating: 5,
      location: 'Munich, Germany'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer',
      content: 'Professional service and transparent process. Now working at a leading tech company in Berlin.',
      rating: 5,
      location: 'Berlin, Germany'
    },
    {
      name: 'Anita Patel',
      role: 'Healthcare Assistant',
      content: 'The Ausbildung program helped me start a new career. Grateful for Kantams guidance.',
      rating: 5,
      location: 'Hamburg, Germany'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroHealthcare})` }}
        >
          <div className="bg-gradient-to-r from-primary/90 to-secondary/90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Your Gateway to 
                  <span className="block text-yellow-300">Germany Awaits</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                  Connect skilled medical professionals worldwide with top healthcare opportunities in Germany, offering end-to-end relocation support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                    Check Eligibility Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Migration Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial consultation to successful placement, we provide end-to-end support for your German migration journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" size="sm" asChild>
                    <a href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dreams Fulfilled in Germany
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Read inspiring stories from professionals who successfully made Germany their new home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${germanyOpportunity})` }}
      >
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your German Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have successfully migrated to Germany with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <MessageSquare className="mr-2 h-5 w-5" />
              Start WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
