import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Globe, Award, Target, Heart, Handshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'Building meaningful partnerships between dedicated professionals and leading German healthcare institutions.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive network of partner hospitals, healthcare institutions, and training centers across Germany.'
    },
    {
      icon: Award,
      title: 'Specialized Training',
      description: 'Comprehensive training programs tailored to German healthcare standards and language requirements.'
    },
    {
      icon: Target,
      title: 'Tech-Driven Processes',
      description: 'Modern, streamlined processes using technology to ensure efficient and transparent migration support.'
    }
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kantam',
      role: 'Founder & CEO',
      experience: '15+ years in immigration consulting',
      expertise: 'German Healthcare System, Visa Processing'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Nursing Division',
      experience: '12+ years in nursing recruitment',
      expertise: 'Nursing Migration, Ausbildung Programs'
    },
    {
      name: 'Michael Weber',
      role: 'German Operations Director',
      experience: '10+ years in Germany',
      expertise: 'Hospital Partnerships, Local Support'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              About Kantams
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Partner for German Migration
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              With over 15 years of experience, Kantams has been the bridge connecting skilled professionals 
              with their dream careers in Germany.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary p-3 rounded-full">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-center text-muted-foreground leading-relaxed">
                  Connect skilled medical professionals worldwide with top healthcare opportunities in Germany, 
                  offering end-to-end relocation support with integrity, expertise, and personalized care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-secondary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-center text-muted-foreground leading-relaxed">
                  Build meaningful partnerships between dedicated professionals and leading German healthcare 
                  institutions, creating a seamless pathway for global talent to thrive in Germany.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our organizational values guide every interaction and decision we make for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to making your German migration journey successful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                  <p className="text-sm"><strong>Expertise:</strong> {member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Kantams?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              15 years of expertise, 2000+ successful placements, and a commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2000+</div>
              <div className="text-lg">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Partner Hospitals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;