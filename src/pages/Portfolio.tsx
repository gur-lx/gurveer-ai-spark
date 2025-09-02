import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { useToast } from "@/hooks/use-toast";
import gurveerProfile from "@/assets/gurveer-profile.jpg";
import {
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  Brain,
  Database,
  BarChart3,
  Code,
  PieChart,
  TrendingUp,
  Shield,
  Cpu,
  Send,
  MapPin,
  User,
  Briefcase,
  GraduationCap,
  Home,
  BookOpen,
  Image,
  Calendar
} from "lucide-react";

const Portfolio = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const skills = [
    {
      icon: Code,
      title: "Programming Languages",
      description: "C, C++, Python for building robust applications and algorithms"
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Extracting insights from complex datasets using advanced techniques"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Building predictive models and AI solutions for real-world problems"
    },
    {
      icon: BarChart3,
      title: "Power BI",
      description: "Creating interactive dashboards and business intelligence solutions"
    },
    {
      icon: PieChart,
      title: "Feature Engineering",
      description: "Optimizing data features for improved model performance"
    },
    {
      icon: TrendingUp,
      title: "EDA & Visualization",
      description: "Exploratory data analysis and compelling data visualizations"
    }
  ];

  const services = [
    {
      icon: Database,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights using modern analytical tools and techniques.",
      features: [
        "Statistical Analysis & Reporting",
        "Data Cleaning & Preprocessing",
        "Interactive Dashboard Creation",
        "Business Intelligence Solutions"
      ]
    },
    {
      icon: Brain,
      title: "ML Model Training",
      description: "Build and deploy machine learning models to solve complex business problems.",
      features: [
        "Predictive Modeling",
        "Classification & Regression",
        "Model Optimization & Tuning",
        "Performance Evaluation"
      ]
    },
    {
      icon: Cpu,
      title: "AI Consultation",
      description: "Strategic guidance on implementing AI solutions for your business needs.",
      features: [
        "AI Strategy Development",
        "Technology Assessment",
        "Implementation Planning",
        "Best Practices Guidance"
      ]
    }
  ];

  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Developed a comprehensive machine learning solution to predict customer retention using Logistic Regression and Random Forest algorithms. Achieved 94% accuracy in identifying at-risk customers.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Logistic Regression", "Random Forest"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Fraud Detection System",
      description: "Built an advanced anomaly detection system to identify fraudulent transactions in real-time. Implemented multiple ML algorithms to minimize false positives while maintaining high detection rates.",
      technologies: ["Python", "TensorFlow", "Anomaly Detection", "Feature Engineering", "Data Visualization"],
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-4">
            <h1 className="text-2xl font-bold text-foreground mr-8">Gurveer Singh</h1>
          </div>
        </div>
      </header>

      {/* Main Content with Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="home" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Home
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Daily Blog
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Image Gallery
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact
            </TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-hero rounded-lg">
              <div className="max-w-6xl mx-auto px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1 text-center lg:text-left animate-fade-in-up">
                    <div className="mb-6">
                      <span className="text-primary font-medium text-lg">👋 Hello, I'm</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                      Gurveer Singh
                    </h1>
                    <div className="text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
                      AI/ML Enthusiast • Data Analyst • Machine Learning Developer
                    </div>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                      Passionate about Artificial Intelligence & Machine Learning — transforming data into meaningful insights and building intelligent solutions for tomorrow's challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button variant="hero" size="hero" className="animate-scale-in">
                        <Mail className="h-5 w-5" />
                        Contact Me
                      </Button>
                      <Button variant="accent" size="hero" className="animate-scale-in">
                        <Download className="h-5 w-5" />
                        Download CV
                      </Button>
                    </div>
                  </div>
                  <div className="flex-shrink-0 animate-fade-in">
                    <div className="relative">
                      <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                        <img
                          src={gurveerProfile}
                          alt="Gurveer Singh - AI/ML Enthusiast"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -z-10 inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-glow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
                <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fade-in-up">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a passionate Computer Science student in my 3rd year of B.Tech, specializing in Artificial Intelligence and Machine Learning. My journey in tech is driven by curiosity and the desire to solve complex problems through intelligent data-driven solutions.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With hands-on experience in predictive modeling, deep learning, and data analysis, I've completed a comprehensive 45-day internship and various online certifications. I believe in the transformative power of AI to create meaningful impact across industries.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My expertise spans from traditional machine learning algorithms to modern deep learning frameworks, with a strong foundation in statistical analysis and feature engineering.
                  </p>
                </div>
                
                <Card className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-primary p-3 rounded-full">
                          <User className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Personal Info</h3>
                          <p className="text-muted-foreground">3rd Year B.Tech CSE Student</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-secondary p-3 rounded-full">
                          <Briefcase className="h-6 w-6 text-secondary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Experience</h3>
                          <p className="text-muted-foreground">45-day Internship + Certifications</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-primary p-3 rounded-full">
                          <GraduationCap className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Education</h3>
                          <p className="text-muted-foreground">Computer Science Engineering</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-muted/30 rounded-lg">
              <div className="px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-6">Technical Skills</h2>
                  <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    A comprehensive toolkit for modern AI/ML development and data analysis
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {skills.map((skill, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <SkillCard {...skill} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">Services</h2>
                <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Leveraging AI and data science to deliver impactful solutions
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 bg-muted/30 rounded-lg">
              <div className="px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-6">Featured Projects</h2>
                  <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Real-world applications of machine learning and data analysis
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Daily Blog Tab */}
          <TabsContent value="blog" className="space-y-8">
            <div className="text-center py-20">
              <Calendar className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
              <h2 className="text-4xl font-bold text-foreground mb-6">Daily Blog</h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                Share insights, learnings, and thoughts about AI/ML, data science, and technology
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="shadow-card hover:shadow-glow transition-all duration-300 text-left">
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">Coming Soon</div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Blog Posts Coming Soon</h3>
                    <p className="text-muted-foreground mb-4">
                      I'll be sharing regular insights about my journey in AI/ML, project learnings, and industry trends.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">AI/ML</span>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Learning</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card hover:shadow-glow transition-all duration-300 text-left">
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">Upcoming</div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Project Deep Dives</h3>
                    <p className="text-muted-foreground mb-4">
                      Detailed breakdowns of my machine learning projects, including challenges faced and solutions implemented.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Projects</span>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Technical</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card hover:shadow-glow transition-all duration-300 text-left">
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">Planned</div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Industry Insights</h3>
                    <p className="text-muted-foreground mb-4">
                      Analysis of latest trends in AI/ML, new technologies, and their potential impact on various industries.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Trends</span>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Analysis</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Image Gallery Tab */}
          <TabsContent value="gallery" className="space-y-8">
            <div className="text-center py-20">
              <Image className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
              <h2 className="text-4xl font-bold text-foreground mb-6">Image Gallery</h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                A visual journey through my projects, achievements, and learning experiences
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="aspect-square overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0 h-full flex items-center justify-center bg-gradient-primary">
                    <div className="text-center text-primary-foreground">
                      <Image className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-sm">Project Screenshots</p>
                      <p className="text-xs opacity-80">Coming Soon</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="aspect-square overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0 h-full flex items-center justify-center bg-gradient-secondary">
                    <div className="text-center text-secondary-foreground">
                      <BarChart3 className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-sm">Data Visualizations</p>
                      <p className="text-xs opacity-80">Coming Soon</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="aspect-square overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0 h-full flex items-center justify-center bg-gradient-primary">
                    <div className="text-center text-primary-foreground">
                      <Brain className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-sm">ML Model Results</p>
                      <p className="text-xs opacity-80">Coming Soon</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="aspect-square overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0 h-full flex items-center justify-center bg-gradient-secondary">
                    <div className="text-center text-secondary-foreground">
                      <GraduationCap className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-sm">Certificates</p>
                      <p className="text-xs opacity-80">Coming Soon</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="aspect-square overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0 h-full flex items-center justify-center bg-gradient-primary">
                    <div className="text-center text-primary-foreground">
                      <Code className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-sm">Code Snippets</p>
                      <p className="text-xs opacity-80">Coming Soon</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="aspect-square overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0 h-full flex items-center justify-center bg-gradient-secondary">
                    <div className="text-center text-secondary-foreground">
                      <Briefcase className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-sm">Workspace</p>
                      <p className="text-xs opacity-80">Coming Soon</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-8">
            <section className="py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">Get In Touch</h2>
                <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Let's collaborate on exciting AI/ML projects and data-driven solutions
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <Card className="shadow-card hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-gradient-primary p-3 rounded-full">
                            <Mail className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">Email</h4>
                            <p className="text-muted-foreground">gurveersinghpassi@gmail.com</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="bg-gradient-secondary p-3 rounded-full">
                            <Phone className="h-5 w-5 text-secondary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">Phone</h4>
                            <p className="text-muted-foreground">+91 9577392000</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="bg-gradient-primary p-3 rounded-full">
                            <Linkedin className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">LinkedIn</h4>
                            <p className="text-muted-foreground">www.linkedin.com/in/gurveer-singh-847b37312</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="bg-gradient-secondary p-3 rounded-full">
                            <Github className="h-5 w-5 text-secondary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">GitHub</h4>
                            <p className="text-muted-foreground">github.com/GurveerSingh123</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-foreground">Send a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Name
                          </label>
                          <Input id="name" required />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email
                          </label>
                          <Input id="email" type="email" required />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject
                        </label>
                        <Input id="subject" required />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <Textarea id="message" rows={5} required />
                      </div>
                      <Button type="submit" variant="hero" size="hero" className="w-full">
                        <Send className="h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Gurveer Singh. Built with passion for AI/ML and data science.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;