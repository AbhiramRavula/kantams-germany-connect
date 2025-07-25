import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      title: 'Language Requirements',
      questions: [
        {
          question: 'What level of German is required for nursing jobs?',
          answer: 'For nursing positions in Germany, you typically need B2 level German proficiency. Some positions may accept B1 with a commitment to reach B2 within 6 months. We provide specialized German language training focused on medical terminology.'
        },
        {
          question: 'Can I work while learning German?',
          answer: 'Yes, with an Ausbildung program, you can work as an apprentice while learning German. For skilled worker visas, you need to demonstrate the required German level before arrival.'
        },
        {
          question: 'How long does it take to learn German to B2 level?',
          answer: 'Typically 6-12 months with intensive study. Our structured programs include medical German, which is essential for healthcare professionals.'
        }
      ]
    },
    {
      title: 'Salary and Benefits',
      questions: [
        {
          question: 'What is the average salary for nurses in Germany?',
          answer: 'Qualified nurses in Germany earn between €2,500-€4,000 per month depending on experience, location, and specialization. Additional benefits include health insurance, pension contributions, and vacation allowances.'
        },
        {
          question: 'Do I get paid during Ausbildung training?',
          answer: 'Yes! Ausbildung trainees receive a monthly stipend of €1,100-€1,300 per month. This increases annually and you also receive full benefits including health insurance.'
        },
        {
          question: 'Are there additional benefits besides salary?',
          answer: 'Yes, benefits typically include health insurance, pension contributions, 30+ vacation days, professional development opportunities, and often housing assistance for international workers.'
        }
      ]
    },
    {
      title: 'Visa and Immigration',
      questions: [
        {
          question: 'What is the difference between Skilled Worker Visa and Ausbildung Visa?',
          answer: 'Skilled Worker Visa is for qualified professionals with recognized degrees. Ausbildung Visa is for vocational training programs. Both lead to permanent residence opportunities.'
        },
        {
          question: 'How long does visa processing take?',
          answer: 'Skilled Worker Visa: 2-4 months. Ausbildung Visa: 3-6 months. We assist with complete documentation to minimize delays.'
        },
        {
          question: 'Can my family come with me?',
          answer: 'Yes, spouses and children under 18 can accompany you. Spouses can work immediately, and children receive free education and healthcare.'
        }
      ]
    },
    {
      title: 'Job Opportunities',
      questions: [
        {
          question: 'What are my chances of getting a job?',
          answer: 'Germany has a significant shortage of healthcare professionals. With proper qualifications and B2 German, job placement rate is over 95%. We have partnerships with 50+ hospitals.'
        },
        {
          question: 'Which cities have the most opportunities?',
          answer: 'Major opportunities exist in Berlin, Munich, Hamburg, Frankfurt, Cologne, and Stuttgart. We also place professionals in smaller cities with excellent quality of life.'
        },
        {
          question: 'Can I change jobs after arriving in Germany?',
          answer: 'Yes, after arrival you have flexibility to change employers. We provide ongoing support even after placement to ensure career growth.'
        }
      ]
    },
    {
      title: 'Education and Recognition',
      questions: [
        {
          question: 'Will my Indian nursing degree be recognized?',
          answer: 'Yes, Indian nursing degrees can be recognized through the equivalence process. We guide you through credential evaluation, additional courses if needed, and the recognition procedure.'
        },
        {
          question: 'Do I need additional training or exams?',
          answer: 'Depending on your qualification, you may need a bridging course or adaptation period. We assess your credentials and provide clear guidance on requirements.'
        },
        {
          question: 'How long does the recognition process take?',
          answer: 'Typically 3-6 months for complete recognition. We handle the entire process including document preparation, translation, and liaison with German authorities.'
        }
      ]
    },
    {
      title: 'Permanent Residence',
      questions: [
        {
          question: 'How can I get permanent residence in Germany?',
          answer: 'After 4 years of legal residence with sufficient German (B1) and integration course completion, you can apply for permanent residence. Skilled workers may qualify in as little as 2 years.'
        },
        {
          question: 'Can I become a German citizen?',
          answer: 'Yes, after 8 years of legal residence (6 years with integration course), B1+ German proficiency, and meeting other requirements, you can apply for German citizenship.'
        },
        {
          question: 'What happens if I want to return to India temporarily?',
          answer: 'With permanent residence, you can travel freely. Before permanent residence, extended absences may affect your residence permit. We provide guidance on travel restrictions.'
        }
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
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Questions Answered
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find answers to common questions about German migration, nursing opportunities, visas, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <HelpCircle className="h-6 w-6 mr-2 text-primary" />
                    {category.title}
                  </CardTitle>
                  <CardDescription>
                    Common questions about {category.title.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, questionIndex) => (
                      <AccordionItem 
                        key={questionIndex} 
                        value={`${categoryIndex}-${questionIndex}`}
                      >
                        <AccordionTrigger className="text-left">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert team is here to provide personalized answers to your specific situation and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Start WhatsApp Chat
            </Button>
            <Button variant="outline" size="lg">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;