import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  Send, 
  Heart,
  MessageSquare,
  CheckCircle,
  ThumbsUp,
  Users,
  Award
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    service: '',
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for your feedback!",
      description: "Your review helps us improve our services.",
    });
    
    setFormData({
      name: '',
      email: '',
      rating: 0,
      service: '',
      feedback: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRating = (rating: number) => {
    setFormData({
      ...formData,
      rating
    });
  };

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Registered Nurse',
      location: 'Munich, Germany',
      rating: 5,
      feedback: 'Kantams made my dream of working in Germany a reality. The entire process was smooth and professional. I\'m now working at a leading hospital in Munich and couldn\'t be happier!',
      service: 'Nursing Migration',
      date: 'January 2024'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer',
      location: 'Berlin, Germany',
      rating: 5,
      feedback: 'Excellent service and transparent process. The team guided me through every step of the Skilled Worker Visa application. Now working at a top tech company in Berlin.',
      service: 'Skilled Worker Visa',
      date: 'December 2023'
    },
    {
      name: 'Anita Patel',
      role: 'Healthcare Assistant',
      location: 'Hamburg, Germany',
      rating: 5,
      feedback: 'The Ausbildung program was perfect for me. I learned German, gained valuable skills, and now have a stable career in healthcare. Thank you Kantams!',
      service: 'Ausbildung Program',
      date: 'November 2023'
    },
    {
      name: 'Suresh Reddy',
      role: 'Mechanical Engineer',
      location: 'Stuttgart, Germany',
      rating: 5,
      feedback: 'Professional team with deep knowledge of German immigration. They helped me with qualification recognition and job placement. Highly recommended!',
      service: 'Engineering Migration',
      date: 'October 2023'
    },
    {
      name: 'Meera Joshi',
      role: 'Physical Therapist',
      location: 'Frankfurt, Germany',
      rating: 5,
      feedback: 'From initial consultation to arriving in Germany, Kantams supported me throughout. The team is responsive, knowledgeable, and genuinely cares about your success.',
      service: 'Healthcare Migration',
      date: 'September 2023'
    },
    {
      name: 'Vikram Singh',
      role: 'IT Project Manager',
      location: 'Cologne, Germany',
      rating: 5,
      feedback: 'Outstanding service! They helped me understand the complex visa process and prepared all documents perfectly. The job placement support was exceptional.',
      service: 'IT Migration',
      date: 'August 2023'
    }
  ];

  const stats = [
    { icon: Users, number: '2000+', label: 'Satisfied Clients' },
    { icon: Star, number: '4.9/5', label: 'Average Rating' },
    { icon: Award, number: '95%', label: 'Success Rate' },
    { icon: Heart, number: '50+', label: 'Partner Hospitals' }
  ];

  const services = [
    'Nursing Migration',
    'Skilled Worker Visa',
    'Ausbildung Program',
    'Engineering Migration',
    'Healthcare Migration',
    'IT Migration',
    'Document Processing',
    'Language Training',
    'General Consultation'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Client Feedback
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Success Stories Inspire Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Share your experience and help others on their German migration journey. 
              Your feedback helps us continuously improve our services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Feedback Form */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Share Your Experience</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We Value Your Feedback
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us improve and inspire others by sharing your migration journey experience
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MessageSquare className="h-6 w-6 mr-2 text-primary" />
                Submit Your Feedback
              </CardTitle>
              <CardDescription>
                Your honest feedback helps us serve future clients better
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email (optional)"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Used</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Select the service you used</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Overall Rating *</Label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRating(star)}
                        className={`p-1 rounded transition-colors ${
                          formData.rating >= star ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        <Star className={`h-8 w-8 ${formData.rating >= star ? 'fill-current' : ''}`} />
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {formData.rating === 0 && 'Please rate your experience'}
                    {formData.rating === 1 && 'Poor - We need to improve'}
                    {formData.rating === 2 && 'Fair - Some issues encountered'}
                    {formData.rating === 3 && 'Good - Satisfactory service'}
                    {formData.rating === 4 && 'Very Good - Exceeded expectations'}
                    {formData.rating === 5 && 'Excellent - Outstanding service'}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback">Your Feedback *</Label>
                  <Textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Please share your experience with our services. What went well? What could we improve? Your detailed feedback helps us serve future clients better..."
                  />
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Your feedback may be featured on our website (with your permission)</span>
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting || formData.rating === 0}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from professionals who successfully migrated to Germany with our support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{testimonial.service}</Badge>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.role} • {testimonial.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 italic">
                    "{testimonial.feedback}"
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{testimonial.date}</span>
                    <ThumbsUp className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied clients who achieved their German migration dreams
            </p>
            <Button variant="default" size="lg">
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Feedback;