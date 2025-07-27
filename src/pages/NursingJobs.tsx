import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  MapPin, 
  Clock, 
  Euro, 
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Building
} from 'lucide-react';
import Layout from '@/components/Layout';

const NursingJobs = () => {
  const nursingJobs = [
    {
      title: 'Registered Nurse - ICU',
      hospital: 'Charité - Universitätsmedizin Berlin',
      location: 'Berlin',
      salary: '€3,200 - €4,000',
      type: 'Full-time',
      experience: '2+ years',
      requirements: ['B2 German Level', 'EU Recognition', 'ICU Experience'],
      benefits: ['Health Insurance', 'Pension Plan', '30 Days Holiday', 'Training Support']
    },
    {
      title: 'General Ward Nurse',
      hospital: 'University Hospital Munich',
      location: 'Munich',
      salary: '€2,800 - €3,500',
      type: 'Full-time',
      experience: '1+ years',
      requirements: ['B1 German Level', 'Nursing Degree', 'Patient Care Skills'],
      benefits: ['Relocation Support', 'Language Training', 'Career Development']
    },
    {
      title: 'Emergency Nurse',
      hospital: 'Frankfurt University Hospital',
      location: 'Frankfurt',
      salary: '€3,000 - €3,800',
      type: 'Full-time',
      experience: '3+ years',
      requirements: ['B2 German Level', 'Emergency Experience', 'Quick Decision Making'],
      benefits: ['Shift Allowance', 'Professional Growth', 'International Team']
    }
  ];

  const requirements = [
    {
      title: 'Educational Qualification',
      description: 'Bachelor\'s degree in Nursing or equivalent qualification recognized in Germany.',
      icon: GraduationCap
    },
    {
      title: 'Language Proficiency',
      description: 'German language proficiency at B1/B2 level depending on the position.',
      icon: Building
    },
    {
      title: 'Professional Experience',
      description: 'Minimum 1-3 years of relevant nursing experience in hospital or clinical settings.',
      icon: Award
    },
    {
      title: 'EU Recognition',
      description: 'Nursing qualification must be recognized by German authorities.',
      icon: CheckCircle
    }
  ];

  const benefits = [
    'Competitive salary packages',
    'Comprehensive health insurance',
    'Pension and retirement benefits',
    'Professional development opportunities',
    'Work-life balance with flexible schedules',
    'Relocation and integration support',
    'Language training programs',
    'Career advancement pathways'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white text-primary">
              Nursing Careers
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nursing Jobs in Germany
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover rewarding nursing career opportunities in Germany's world-class healthcare system. 
              Join thousands of international nurses who have built successful careers in German hospitals.
            </p>
            <Button variant="cta" size="lg" className="bg-white text-primary hover:bg-white/90">
              View All Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Current Openings</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available Nursing Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore immediate job openings at leading German hospitals and healthcare facilities.
            </p>
          </div>

          <div className="grid gap-8">
            {nursingJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Heart className="h-6 w-6 text-primary" />
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {job.hospital}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Euro className="h-4 w-4" />
                        {job.salary}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          <Users className="inline h-4 w-4 mr-1" />
                          Experience: {job.experience}
                        </p>
                      </div>
                      <Button className="shrink-0">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Requirements</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Qualification Requirements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential qualifications and requirements for nursing positions in Germany.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((requirement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full">
                      <requirement.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{requirement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{requirement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Nursing in Germany?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the comprehensive benefits and advantages of pursuing a nursing career in Germany.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
                <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Nursing Career in Germany?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our comprehensive program and get personalized support for your nursing career in Germany.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="bg-white text-primary hover:bg-white/90">
              Apply for Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NursingJobs;