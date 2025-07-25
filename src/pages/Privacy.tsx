import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck, Mail, Phone } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: [
        'Personal identification information (name, email, phone number, address)',
        'Professional qualifications and work experience',
        'Educational certificates and documents',
        'Passport and visa-related information',
        'Communication preferences and correspondence',
        'Website usage data through cookies and analytics'
      ]
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: [
        'Processing your migration and job placement applications',
        'Communicating about services and opportunities',
        'Conducting eligibility assessments and consultations',
        'Maintaining client records and case management',
        'Improving our services and website functionality',
        'Complying with legal and regulatory requirements'
      ]
    },
    {
      icon: UserCheck,
      title: 'Information Sharing',
      content: [
        'German hospitals and healthcare institutions (with consent)',
        'Immigration authorities and licensing bodies (as required)',
        'Language training centers and certification bodies',
        'Legal and professional service providers (when necessary)',
        'We never sell or rent your personal information to third parties',
        'All sharing is done with appropriate safeguards and agreements'
      ]
    },
    {
      icon: Eye,
      title: 'Your Rights (GDPR)',
      content: [
        'Right to access your personal data',
        'Right to rectify incorrect information',
        'Right to erasure (right to be forgotten)',
        'Right to restrict processing',
        'Right to data portability',
        'Right to object to processing',
        'Right to withdraw consent at any time'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Privacy Policy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Privacy Matters to Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We are committed to protecting your personal information and being transparent about how we collect, use, and share your data.
            </p>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              <strong>Last Updated:</strong> January 2024 | <strong>Effective Date:</strong> January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <section.icon className="h-6 w-6 mr-3 text-primary" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Lock className="h-6 w-6 mr-3 text-primary" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">SSL encryption for data transmission</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Secure servers and databases</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Access controls and authentication</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Regular security audits and updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Eye className="h-6 w-6 mr-3 text-primary" />
                  Cookies and Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use cookies and similar technologies to enhance your website experience. Types of cookies we use:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Essential Cookies</h4>
                    <p className="text-sm text-muted-foreground">Required for website functionality and security.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-muted-foreground">Help us understand website usage and improve services.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Functional Cookies</h4>
                    <p className="text-sm text-muted-foreground">Remember your preferences and settings.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Marketing Cookies</h4>
                    <p className="text-sm text-muted-foreground">Deliver relevant advertising (with your consent).</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Privacy */}
            <Card className="bg-gradient-to-r from-primary to-secondary text-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Mail className="h-6 w-6 mr-3" />
                  Privacy Questions or Requests
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  If you have questions about this privacy policy or want to exercise your rights, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    <span>privacy@kantams.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>+91 9876543210</span>
                  </div>
                </div>
                <p className="text-sm opacity-90">
                  We will respond to your request within 30 days as required by GDPR regulations.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. 
                  We will notify you of any material changes by posting the updated policy on our website and updating the 
                  "Last Updated" date. Your continued use of our services after any changes indicates your acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;