import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  GraduationCap, 
  Euro, 
  FileCheck, 
  Users, 
  Clock,
  ArrowRight,
  CheckCircle,
  MapPin,
  Award
} from 'lucide-react';

const NursingAusbildung = () => {
  const eligibilityRequirements = [
    'Bachelor\'s degree in Nursing or equivalent qualification',
    'Minimum 2 years of nursing experience',
    'B2 level German language proficiency',
    'Clean criminal background check',
    'Medical fitness certificate',
    'Willingness to commit to 2+ years in Germany'
  ];

  const recognitionSteps = [
    {
      step: 1,
      title: 'Document Preparation',
      description: 'Gather and translate all educational and professional documents',
      duration: '2-4 weeks'
    },
    {
      step: 2,
      title: 'Authority Submission',
      description: 'Submit application to relevant German nursing authority',
      duration: '4-6 weeks'
    },
    {
      step: 3,
      title: 'Assessment Review',
      description: 'Authority reviews qualifications and may require additional training',
      duration: '8-12 weeks'
    },
    {
      step: 4,
      title: 'Recognition Decision',
      description: 'Receive recognition certificate or adaptation requirements',
      duration: '2-3 weeks'
    }
  ];

  const salaryProgression = [
    { level: 'Ausbildung Year 1', amount: '€1,100', benefits: 'Full health insurance + housing support' },
    { level: 'Ausbildung Year 2', amount: '€1,200', benefits: 'Increased stipend + continued support' },
    { level: 'Ausbildung Year 3', amount: '€1,300', benefits: 'Final year with job guarantee' },
    { level: 'Qualified Nurse', amount: '€2,800+', benefits: 'Full salary + career advancement' }
  ];

  const ausbildungBenefits = [
    {
      icon: Euro,
      title: 'Paid Training',
      description: 'Receive monthly stipend throughout your training period'
    },
    {
      icon: Heart,
      title: 'Healthcare Coverage',
      description: 'Complete health insurance and medical benefits'
    },
    {
      icon: MapPin,
      title: 'Housing Support',
      description: 'Assistance with accommodation and settling in Germany'
    },
    {
      icon: Award,
      title: 'Job Guarantee',
      description: 'Guaranteed employment upon successful completion'
    }
  ];

  const faqs = [
    {
      question: 'Can I bring my family during Ausbildung?',
      answer: 'Yes, spouses and children can accompany you. Spouses can work immediately and children receive free education.'
    },
    {
      question: 'What if my German is not B2 level yet?',
      answer: 'We provide comprehensive German language training. You can start with A2/B1 and achieve B2 through our programs.'
    },
    {
      question: 'How long is the Ausbildung program?',
      answer: 'Typically 3 years for nursing Ausbildung, with possibility to shorten based on prior qualifications.'
    },
    {
      question: 'What happens after completing Ausbildung?',
      answer: 'You receive German nursing qualification and transition to full employment with competitive salary.'
    },
    {
      question: 'Are there specialization options?',
      answer: 'Yes, you can specialize in areas like geriatric care, pediatrics, intensive care, or mental health nursing.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Nursing & Ausbildung
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Nursing Career in Germany
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join Germany's healthcare system through our specialized nursing migration and Ausbildung programs. 
              Get paid while you train and build a rewarding career.
            </p>
          </div>
        </div>
      </section>

      {/* Two Pathways */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Two Pathways</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Path to Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're already qualified or want to train in Germany, we have the right program for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Direct Recognition */}
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary p-4 rounded-full">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-primary">Direct Recognition</CardTitle>
                <CardDescription>For qualified nurses with experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Requirements:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-success" />
                      Nursing degree + 2+ years experience
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-success" />
                      B2 German language proficiency
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-success" />
                      Clean background and health check
                    </li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm"><strong>Timeline:</strong> 4-6 months</p>
                  <p className="text-sm"><strong>Starting Salary:</strong> €2,800-€3,500/month</p>
                </div>
                <Button variant="default" className="w-full">
                  Check Recognition Eligibility
                </Button>
              </CardContent>
            </Card>

            {/* Ausbildung Program */}
            <Card className="border-secondary/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary p-4 rounded-full">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-secondary">Ausbildung Program</CardTitle>
                <CardDescription>Vocational training with guaranteed job placement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Requirements:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-success" />
                      High school diploma or equivalent
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-success" />
                      B1+ German (B2 preferred)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-success" />
                      Motivation and commitment
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <p className="text-sm"><strong>Duration:</strong> 3 years</p>
                  <p className="text-sm"><strong>Monthly Stipend:</strong> €1,100-€1,300</p>
                </div>
                <Button variant="secondary" className="w-full">
                  Apply for Ausbildung
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Checklist */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Eligibility</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Direct Recognition Requirements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Check if you qualify for direct nursing recognition in Germany
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center">
                <FileCheck className="h-6 w-6 mr-2 text-primary" />
                Eligibility Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {eligibilityRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Meet all requirements? Get your free eligibility assessment!
                </p>
                <Button variant="cta" size="lg">
                  Get Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recognition Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Recognition Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Step-by-Step Recognition
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process for nursing qualification recognition in Germany
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recognitionSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4 relative">
                    <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-full">
                      <FileCheck className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <Badge variant="outline">{step.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Salary & Benefits */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ausbildung Salary Progression
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              See how your earnings grow from training to qualified professional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {salaryProgression.map((level, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{level.level}</CardTitle>
                  <div className="text-2xl font-bold text-yellow-300">{level.amount}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-white/80">{level.benefits}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {ausbildungBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-white/80 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Frequently Asked</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nursing & Ausbildung FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NursingAusbildung;