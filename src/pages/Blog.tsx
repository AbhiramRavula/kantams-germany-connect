import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  ExternalLink,
  Bookmark,
  Search,
  Filter
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const featuredPosts = [
    {
      title: 'Complete Guide to German Nursing Recognition in 2024',
      excerpt: 'Step-by-step process for getting your nursing qualifications recognized in Germany, including new regulations and requirements.',
      author: 'Dr. Priya Sharma',
      date: '2024-01-15',
      category: 'Nursing',
      readTime: '8 min read',
      featured: true
    },
    {
      title: 'Opportunity Card: Germany\'s New Point-Based Immigration',
      excerpt: 'Everything you need to know about Germany\'s new Opportunity Card system and how to maximize your points.',
      author: 'Rajesh Kumar',
      date: '2024-01-10',
      category: 'Visas',
      readTime: '6 min read',
      featured: true
    }
  ];

  const recentPosts = [
    {
      title: 'Top 10 German Cities for Healthcare Professionals',
      excerpt: 'Discover the best German cities offering excellent opportunities for nurses and healthcare workers.',
      author: 'Anita Patel',
      date: '2024-01-12',
      category: 'Career',
      readTime: '5 min read'
    },
    {
      title: 'Mastering Medical German: Essential Vocabulary',
      excerpt: 'Key German medical terms every healthcare professional should know before starting work in Germany.',
      author: 'Michael Weber',
      date: '2024-01-08',
      category: 'Language',
      readTime: '7 min read'
    },
    {
      title: 'Life in Germany: First 30 Days Survival Guide',
      excerpt: 'Practical tips for your first month in Germany - from opening bank accounts to registering your address.',
      author: 'Sarah Thompson',
      date: '2024-01-05',
      category: 'Life in Germany',
      readTime: '10 min read'
    },
    {
      title: 'Ausbildung vs University: Which Path is Right for You?',
      excerpt: 'Compare vocational training and university education paths for your German career journey.',
      author: 'Dr. Rajesh Kantam',
      date: '2024-01-03',
      category: 'Education',
      readTime: '6 min read'
    },
    {
      title: 'German Work Culture: What to Expect',
      excerpt: 'Understanding German workplace culture, hierarchy, and professional etiquette for career success.',
      author: 'Klaus Mueller',
      date: '2023-12-28',
      category: 'Culture',
      readTime: '8 min read'
    },
    {
      title: 'Family Migration to Germany: Complete Guide',
      excerpt: 'Everything about bringing your family to Germany, including visa requirements and integration support.',
      author: 'Priya Sharma',
      date: '2023-12-25',
      category: 'Family',
      readTime: '9 min read'
    }
  ];

  const jobBoards = [
    {
      name: 'StepStone',
      description: 'Germany\'s leading job portal with thousands of healthcare positions',
      url: 'https://stepstone.de',
      category: 'General'
    },
    {
      name: 'Xing Jobs',
      description: 'Professional network with exclusive job opportunities',
      url: 'https://xing.com/jobs',
      category: 'Professional'
    },
    {
      name: 'Care.com Germany',
      description: 'Specialized platform for healthcare and nursing jobs',
      url: 'https://care.com/de',
      category: 'Healthcare'
    },
    {
      name: 'Bundesagentur für Arbeit',
      description: 'Official German employment agency job portal',
      url: 'https://arbeitsagentur.de',
      category: 'Official'
    }
  ];

  const categories = ['All', 'Nursing', 'Visas', 'Career', 'Language', 'Life in Germany', 'Education'];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Blog & Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your German Migration Guide
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert insights, success stories, and practical guides to help you navigate your German migration journey.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search articles, guides, and resources..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <Button 
                  key={category} 
                  variant="outline" 
                  size="sm" 
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Badge variant="secondary" className="mb-4">Featured Articles</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Insights & Guides
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl hover:text-primary cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">{post.category}</Badge>
                  <CardTitle className="text-lg hover:text-primary cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription>
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Job Boards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Job Resources</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted German Job Boards
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Direct links to Germany's most reliable job portals for finding your next opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobBoards.map((board, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{board.name}</CardTitle>
                    <Badge variant="outline">{board.category}</Badge>
                  </div>
                  <CardDescription>{board.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="default" size="sm" className="w-full" asChild>
                    <a href={board.url} target="_blank" rel="noopener noreferrer">
                      Visit Job Board
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stay Updated with Latest Insights
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get weekly updates on German migration news, job opportunities, and expert tips directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="cta" size="lg" className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            No spam. Unsubscribe anytime. Privacy policy compliant.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;