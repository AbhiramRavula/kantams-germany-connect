import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Building, 
  Star,
  Clock,
  FileText,
  CheckCircle,
  Users,
  ArrowRight
} from 'lucide-react';

const Visas = () => {
  const visaTypes = [
    {
      icon: Briefcase,
      title: 'Skilled Worker Visa',
      subtitle: '(Fachkräftevisum)',
      description: 'For qualified professionals with recognized degrees and job offers',
      requirements: [
        'Recognized degree or vocational qualification',
        'German language B1-B2 (depending on profession)',
        'Job offer or employment contract',
        'Sufficient financial resources'
      ],
      processingTime: '2-4 months',
      validity: '4 years (renewable)',
      familyAllowed: true,
      pathToPR: '2-4 years',
      color: 'bg-blue-500'
    },
    {
      icon: GraduationCap,
      title: 'Training/Ausbildung Visa',
      subtitle: '(Ausbildungsvisum)',
      description: 'For vocational training programs with guaranteed employment',
      requirements: [
        'High school diploma or equivalent',
        'German language B1-B2',
        'Training contract with German employer',
        'Financial sustainability proof'
      ],
      processingTime: '3-6 months',
      validity: '3 years (training duration)',
      familyAllowed: true,
      pathToPR: '2 years after training',
      color: 'bg-green-500'
    },
    {
      icon: Heart,
      title: 'Healthcare Professional Visa',
      subtitle: '(Gesundheitsfachkraft)',
      description: 'Specialized visa for nurses and healthcare professionals',
      requirements: [
        'Nursing qualification',
        'B2 German language certificate',
        'Recognition of qualifications',
        'Job offer from healthcare institution'
      ],
      processingTime: '2-3 months',
      validity: '4 years (renewable)',
      familyAllowed: true,
      pathToPR: '2 years',
      color: 'bg-red-500'
    },
    {
      icon: Star,
      title: 'Opportunity Card',
      subtitle: '(Chancenkarte)',
      description: 'Point-based system for job seekers without prior job offer',
      requirements: [
        'Recognized qualification',
        'Points based on age, German skills, experience',
        'Financial resources for 1 year',
        'Minimum 6 points required'
      ],
      processingTime: '1-3 months',
      validity: '1 year (job search)',
      familyAllowed: false,
      pathToPR: 'After finding employment',
      color: 'bg-yellow-500'
    },
    {
      icon: Users,
      title: 'Family Reunion Visa',
      subtitle: '(Familiennachzug)',
      description: 'For spouses and children of German residents',
      requirements: [
        'Spouse/parent with valid German residence',
        'Basic German knowledge (A1)',
        'Adequate housing and income',
        'Valid marriage/birth certificates'
      ],
      processingTime: '3-6 months',
      validity: 'Same as sponsor\'s permit',
      familyAllowed: true,
      pathToPR: 'Same timeline as sponsor',
      color: 'bg-purple-500'
    },
    {
      icon: Building,
      title: 'Self-Employment Visa',
      subtitle: '(Selbständigenvisum)',
      description: 'For entrepreneurs and business investors',
      requirements: [
        'Detailed business plan',
        'Sufficient capital investment',
        'Economic benefit to Germany',
        'Professional qualifications'
      ],
      processingTime: '3-6 months',
      validity: '3 years (renewable)',
      familyAllowed: true,
      pathToPR: '3 years',
      color: 'bg-orange-500'
    }
  ];

  const documentsRequired = [
    'Valid passport (minimum 12 months validity)',
    'Passport-sized photographs',
    'Completed visa application form',
    'Educational certificates (translated and apostilled)',
    'Employment contract or job offer letter',
    'German language certificate',
    'Proof of financial resources',
    'Health insurance coverage',
    'Criminal background check',
    'CV/Resume in German format'
  ];

  const opportunityCardPoints = [
    { criteria: 'University degree', points: '4 points' },
    { criteria: 'Professional experience (5+ years)', points: '3 points' },
    { criteria: 'German language B2+', points: '3 points' },
    { criteria: 'Age under 35', points: '2 points' },
    { criteria: 'Previous stay in Germany', points: '1 point' },
    { criteria: 'Spouse with qualification', points: '1 point' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              German Visas
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Pathway to Germany
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive guide to German work visas, requirements, and application processes. 
              Find the right visa type for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Visa Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Visa Type
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Different visa types for different career paths and situations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {visaTypes.map((visa, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className={`${visa.color} p-3 rounded-full flex-shrink-0`}>
                      <visa.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{visa.title}</CardTitle>
                      <CardDescription className="text-sm font-medium text-primary">
                        {visa.subtitle}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-2">{visa.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {visa.requirements.slice(0, 2).map((req, reqIndex) => (
                        <li key={reqIndex} className="text-xs text-muted-foreground flex items-start">
                          <CheckCircle className="h-3 w-3 mr-2 mt-0.5 text-success flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="font-semibold text-foreground">Processing Time</p>
                      <p className="text-muted-foreground">{visa.processingTime}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Validity</p>
                      <p className="text-muted-foreground">{visa.validity}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Family Allowed</p>
                      <p className="text-muted-foreground">{visa.familyAllowed ? 'Yes' : 'No'}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Path to PR</p>
                      <p className="text-muted-foreground">{visa.pathToPR}</p>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Card Details */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">New Option</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Germany Opportunity Card
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Point-based immigration system - minimum 6 points required
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center">
                <Star className="h-6 w-6 mr-2 text-yellow-500" />
                Points Calculation System
              </CardTitle>
              <CardDescription className="text-center">
                Calculate your eligibility for the Opportunity Card
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {opportunityCardPoints.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">{item.criteria}</span>
                    <Badge variant="secondary">{item.points}</Badge>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> You need a minimum of 6 points to qualify. 
                  Additional points available for specialized skills and German language proficiency.
                </p>
              </div>
              <div className="text-center mt-6">
                <Button variant="cta" size="lg">
                  Calculate Your Points
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Document Requirements */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Documentation</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Required Documents
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common documents needed for German visa applications
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center">
                <FileText className="h-6 w-6 mr-2 text-primary" />
                Document Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {documentsRequired.map((document, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{document}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Important:</strong> All foreign documents must be translated into German by certified translators 
                  and may require apostille/legalization depending on your country of origin.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Processing Times */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Processing Timeline
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Typical processing times for different visa categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Track</h3>
              <p className="text-white/80 text-sm mb-2">Healthcare professionals with recognized qualifications</p>
              <div className="text-2xl font-bold text-yellow-300">2-3 months</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Standard</h3>
              <p className="text-white/80 text-sm mb-2">Skilled workers with job offers</p>
              <div className="text-2xl font-bold text-yellow-300">3-4 months</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Complex Cases</h3>
              <p className="text-white/80 text-sm mb-2">Self-employment or qualification recognition needed</p>
              <div className="text-2xl font-bold text-yellow-300">4-6 months</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-white/80 mb-6">
              We expedite your application with proper documentation and expert guidance
            </p>
            <Button variant="cta" size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Your Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Visas;