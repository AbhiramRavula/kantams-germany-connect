import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Laptop, 
  Wrench, 
  Building, 
  ArrowRight,
  Euro,
  MapPin,
  Users,
  Briefcase,
  GraduationCap,
  FileCheck
} from 'lucide-react';

const GermanyJobs = () => {
  const sectors = [
    {
      icon: Heart,
      title: 'Healthcare & Nursing',
      demand: 'Very High',
      avgSalary: '€2,500 - €4,500',
      requirements: 'B2 German, Recognition of qualifications',
      opportunities: '15,000+ open positions',
      color: 'bg-red-500'
    },
    {
      icon: Laptop,
      title: 'Information Technology',
      demand: 'High',
      avgSalary: '€3,500 - €7,000',
      requirements: 'English proficiency, A2+ German preferred',
      opportunities: '25,000+ open positions',
      color: 'bg-blue-500'
    },
    {
      icon: Wrench,
      title: 'Skilled Trades',
      demand: 'Very High',
      avgSalary: '€2,800 - €5,500',
      requirements: 'B1+ German, Vocational qualification',
      opportunities: '10,000+ open positions',
      color: 'bg-orange-500'
    },
    {
      icon: Building,
      title: 'Engineering',
      demand: 'High',
      avgSalary: '€4,000 - €8,000',
      requirements: 'B2 German, Degree recognition',
      opportunities: '8,000+ open positions',
      color: 'bg-green-500'
    }
  ];

  const salaryTable = [
    { position: 'Registered Nurse', entry: '€2,500', experienced: '€3,500', senior: '€4,500' },
    { position: 'Software Developer', entry: '€3,500', experienced: '€5,500', senior: '€7,500' },
    { position: 'Mechanical Engineer', entry: '€3,800', experienced: '€5,200', senior: '€7,000' },
    { position: 'Electrician', entry: '€2,800', experienced: '€4,000', senior: '€5,500' },
    { position: 'Physical Therapist', entry: '€2,400', experienced: '€3,200', senior: '€4,200' },
    { position: 'IT Project Manager', entry: '€4,500', experienced: '€6,500', senior: '€8,500' }
  ];

  const migrationSteps = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'Complete eligibility assessment and skills evaluation',
      icon: FileCheck
    },
    {
      step: 2,
      title: 'Qualification Recognition',
      description: 'Process credential recognition and equivalence',
      icon: GraduationCap
    },
    {
      step: 3,
      title: 'German Language Training',
      description: 'Achieve required German proficiency level',
      icon: Users
    },
    {
      step: 4,
      title: 'Job Placement',
      description: 'Match with suitable employers and positions',
      icon: Briefcase
    },
    {
      step: 5,
      title: 'Visa Application',
      description: 'Complete visa documentation and application',
      icon: FileCheck
    },
    {
      step: 6,
      title: 'Relocation Support',
      description: 'Arrival assistance and settlement support',
      icon: MapPin
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Germany Job Market
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Endless Opportunities in Germany
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover high-demand sectors, competitive salaries, and your pathway to a successful career in Europe's largest economy.
            </p>
          </div>
        </div>
      </section>

      {/* Top Sectors */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">High-Demand Sectors</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Where Opportunities Await
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Germany actively seeks skilled professionals in these sectors with streamlined visa processes and excellent career prospects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`${sector.color} p-3 rounded-full`}>
                      <sector.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{sector.title}</CardTitle>
                  <Badge variant={sector.demand === 'Very High' ? 'destructive' : 'secondary'}>
                    {sector.demand} Demand
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Average Salary</p>
                    <p className="text-lg font-semibold text-primary">{sector.avgSalary}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Open Positions</p>
                    <p className="font-semibold text-success">{sector.opportunities}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Key Requirements</p>
                    <p className="text-xs">{sector.requirements}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Table */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Salary Information</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Competitive German Salaries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monthly gross salaries in Germany by experience level. All figures include social benefits and 30+ vacation days.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center">
                <Euro className="h-6 w-6 mr-2 text-primary" />
                Monthly Salary Ranges (Gross)
              </CardTitle>
              <CardDescription className="text-center">
                Amounts shown are monthly gross salaries before taxes and social contributions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Position</th>
                      <th className="text-center py-3 px-4">Entry Level</th>
                      <th className="text-center py-3 px-4">Experienced</th>
                      <th className="text-center py-3 px-4">Senior Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryTable.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4 font-medium">{row.position}</td>
                        <td className="text-center py-3 px-4 text-primary font-semibold">{row.entry}</td>
                        <td className="text-center py-3 px-4 text-secondary font-semibold">{row.experienced}</td>
                        <td className="text-center py-3 px-4 text-success font-semibold">{row.senior}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Additional Benefits:</strong> Health insurance, pension contributions, unemployment insurance, 
                  30+ vacation days, sick leave pay, overtime compensation, and professional development opportunities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Migration Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Step-by-Step Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We guide you through every step of the migration process, from initial assessment to successful placement in Germany.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationSteps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4 relative">
                    <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-full">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Timeline: Typically 6-12 months from start to arrival in Germany
            </p>
            <Button variant="cta" size="lg">
              Start Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              General Entry Requirements
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Basic requirements for skilled worker migration to Germany
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-white/80 text-sm">Recognized degree or vocational qualification</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Language</h3>
              <p className="text-white/80 text-sm">German B1-B2 (varies by profession)</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <p className="text-white/80 text-sm">Relevant work experience (2+ years preferred)</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileCheck className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Documents</h3>
              <p className="text-white/80 text-sm">Complete documentation and clean background</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GermanyJobs;