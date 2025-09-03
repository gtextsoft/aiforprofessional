import { ArrowRight, CheckCircle, Target, Zap, TrendingUp, Users, BarChart3, Shield } from "lucide-react"
import { HeroButton } from "@/components/ui/hero-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedDashboard } from "@/components/AnimatedDashboard"
import { CountdownTimer } from "@/components/CountdownTimer"
import heroImage from "@/assets/hero-dashboard.jpg"
import artboardImage from "@/assets/Artboard.png"
import salLogo from "@/assets/SAL.png"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-brand-gray-light sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={salLogo} 
                alt="Dr. Stephen Akintayo Consulting" 
                className="h-12 w-auto"
              />
              <div className="text-2xl font-bold text-brand-navy">
                AI FOR PROFESSIONALS
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="urgency-badge">LIMITED TIME</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Background Image Only */}
      <section 
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${artboardImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1e3a8a',
          height: '100vh',
          padding: '1100px 0 0 0'
        }}
      >
      </section>

      {/* Hero Content Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="mb-4">
                <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  🎯 FREE MASTERCLASS
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                🚀 The AI Professional Advantage: Learn How to Automate 10+ Hours a Week & Position Yourself for a 30% Raise or Higher-Paying Roles
              </h1>
              <p className="text-xl text-brand-gray mb-8 leading-relaxed">
                AI is the #1 skill professionals are using to get promoted, land massive raises, and escape burnout—without working longer hours. This free masterclass reveals the exact tools and strategies they're using.
              </p>
              <div className="flex items-center gap-6 text-sm text-brand-gray mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Instant Access</span>
                </div>
              </div>
              <CountdownTimer />
            </div>
            <div className="lg:order-first slide-in-right">
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-sm text-brand-gray mb-4">Live Dashboard Preview:</p>
                  <div className="floating-animation">
                  <AnimatedDashboard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="container mx-auto text-center relative">
          <div className="mb-8">
            <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-4">
              🎯 PERFECT FOR YOU IF...
            </span>
          </div>
          <h2 className="text-4xl font-bold text-brand-navy mb-8">
            Who This Is For
          </h2>
          <p className="text-xl text-brand-gray mb-12 max-w-4xl mx-auto">
            This isn't just another tech talk. This is for ambitious professionals who are ready to get ahead:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "🩺",
                title: "Doctors & Healthcare Experts",
                description: "Automate patient notes, research, and admin to focus on care."
              },
              {
                icon: "⚖️",
                title: "Lawyers & Consultants", 
                description: "Draft documents and conduct research in minutes, not hours."
              },
              {
                icon: "💼",
                title: "Corporate Professionals",
                description: "Become the AI-powered employee every company wants to promote."
              },
              {
                icon: "✍️",
                title: "Writers, Coaches & Educators",
                description: "Scale your content creation and impact 10x faster."
              },
              {
                icon: "🚀",
                title: "Entrepreneurs & Freelancers",
                description: "Systemize your service delivery and justify premium fees."
              }
            ].map((item, index) => (
              <Card key={index} className="feature-highlight text-left group hover:scale-105 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-brand-gray">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <p className="text-2xl text-brand-navy font-semibold">
              What if you could automate the tedious work and focus solely on what you do best: 
              <span className="bg-gradient-accent bg-clip-text text-transparent"> delivering expert advice and growing your business?</span>
            </p>
          </div>
        </div>
      </section>

      {/* Training Content & Lead Form Section */}
      <section id="training-content" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-lg font-bold">
                🎓 WHAT YOU'LL LEARN
              </span>
            </div>
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              What You'll Discover In This Free Training
            </h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              You'll walk away with an actionable plan to immediately save time and increase your value, including:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
              {[
                {
                title: "The Productivity Blueprint",
                description: "How to instantly automate repetitive tasks (emails, reports, presentations) and reclaim 10-15 hours every single week.",
                  icon: <Zap className="w-6 h-6 text-brand-blue" />
                },
                {
                title: "The Authority Accelerator", 
                description: "The secret to using AI to write thought-leading content, books, and posts that make you the go-to expert in your field.",
                  icon: <Target className="w-6 h-6 text-brand-blue" />
                },
                {
                title: "The Client Service Revolution",
                description: "Implement AI chatbots and smart systems to improve client satisfaction without increasing your workload.",  
                  icon: <TrendingUp className="w-6 h-6 text-brand-blue" />
                },
                {
                title: "The Career Launchpad",
                description: "How to leverage AI to craft a CV that gets you interviewed, prepare for negotiations, and unlock $200k+ remote global opportunities.",
                  icon: <BarChart3 className="w-6 h-6 text-brand-blue" />
                },
                {
                title: "The Exit Strategy",
                description: "Transform your hard-earned experience into a lucrative consulting or coaching business faster than you thought possible.",
                  icon: <Users className="w-6 h-6 text-brand-blue" />
                }
              ].map((item, index) => (
              <Card key={index} className="feature-highlight group hover:scale-105 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-r from-brand-blue to-brand-blue-light rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    </div>
                    <CardTitle className="text-xl text-brand-navy">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-gray">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>

              <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">🎥 What You Get Instantly:</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                <p className="text-brand-gray"><strong>Free On-Demand Masterclass:</strong> Watch and learn the strategies anytime.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                <p className="text-brand-gray"><strong>Real-World Case Studies:</strong> See how professionals just like you are doing this right now.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                <p className="text-brand-gray"><strong>Exclusive Bonus:</strong> Download your free "AI Power Pack" (5 Ebooks) to go even deeper.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section id="platform-features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-bold">
                🚀 PLATFORM FEATURES
              </span>
            </div>
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              Finally, an AI Assistant Built for Your Consulting Business
            </h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto mb-12">
              ConsultAI is your all-in-one platform to automate data crunching, generate client-ready reports, 
              and uncover hidden insights—so you can scale your expertise and revenue without scaling your hours.
            </p>
            <div className="max-w-4xl mx-auto mb-12">
              <img 
                src={heroImage} 
                alt="ConsultAI Dashboard Interface" 
                className="rounded-2xl shadow-elegant w-full floating-animation"
              />
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-brand-navy mb-12">How It Works</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Ingest", desc: "Connect data sources (Excel, Google Sheets, CRM) or paste client information." },
                { step: "2", title: "Analyze", desc: "Our specialized AI models go to work, identifying patterns, risks, and opportunities." },
                { step: "3", title: "Create", desc: "Generate presentations, financial models, SWOT analyses, and executive summaries." },
                { step: "4", title: "Impress", desc: "Deliver profound, data-driven strategy that wins trust and justifies your premium fees." }
              ].map((item, index) => (
                <Card key={index} className="text-center feature-highlight group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <CardTitle className="text-brand-navy">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-gray">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
              </div>
            </div>

          {/* Benefits & Features */}
          <div>
            <h3 className="text-3xl font-bold text-center text-brand-navy mb-12">Transform Your Consulting Practice</h3>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Deliver Insights 10x Faster",
                  description: "Automated data analysis from structured and unstructured sources.",
                  features: ["Real-time data processing", "Advanced pattern recognition", "Instant competitive analysis"]
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Create Client-Ready Documents in Minutes",
                  description: "One-click report and deck generation tailored to your branding.",
                  features: ["Custom branded templates", "Executive summary generation", "Interactive presentations"]
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Uncover Opportunities They Missed",
                  description: "Advanced AI models that perform competitive analysis and market gap identification.",
                  features: ["Market opportunity mapping", "Risk assessment tools", "Strategic recommendations"]
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Become an Irreplaceable Partner",
                  description: "Predictive analytics and scenario modeling tools.",
                  features: ["Predictive forecasting", "Scenario planning", "ROI modeling"]
                }
              ].map((benefit, index) => (
                <Card key={index} className="feature-highlight group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-accent text-white rounded-lg flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-brand-navy">{benefit.title}</CardTitle>
                    </div>
                    <p className="text-brand-gray">{benefit.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-blue" />
                          <span className="text-brand-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Your Trainer & Urgency */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-4">
                  👨‍🏫 YOUR TRAINER
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">
                About Your Trainer: Dr. Stephen Akintayo
          </h2>
              <p className="text-xl text-brand-gray mb-8 leading-relaxed">
                A renowned digital transformation expert and Africa's most sought-after investment coach. Dr. Stephen has empowered thousands of professionals across 20+ industries to future-proof their careers and build wealth with actionable AI strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cta-primary text-lg px-8 py-4 flex items-center justify-center gap-2 group">
                  Start Your AI Transformation Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-4">
                  ⚠️ WHY ACT NOW
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-8">Why You Cannot Afford to Wait</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "⏰",
                    title: "85% of jobs will be transformed by AI within 5 years",
                    description: "The early adopters get the biggest rewards."
                  },
                  {
                    icon: "💰", 
                    title: "Professionals with AI skills command 30-50% higher salaries",
                    description: "Than their peers without AI expertise"
                  },
                  {
                    icon: "⚠️",
                    title: "Delay is the biggest risk", 
                    description: "Those who wait will be playing catch-up to those who act today."
                  }
                ].map((item, index) => (
                  <Card key={index} className="feature-highlight group hover:scale-105 transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{item.icon}</div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h4>
                          <p className="text-brand-gray">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          {/* Social Proof Stats */}
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-4">
              📊 PROVEN RESULTS
            </span>
            <h2 className="text-3xl font-bold text-brand-navy mb-4">
              Join 50,000+ Professionals Who've Already Transformed Their Careers
            </h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              {[
                { number: "50,000+", label: "Professionals Trained" },
                { number: "30%", label: "Average Salary Increase" },
                { number: "10+", label: "Hours Saved Weekly" },
                { number: "95%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-brand-blue mb-2">{stat.number}</div>
                  <div className="text-brand-gray font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-4">
              ⭐ SUCCESS STORIES
            </span>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              Hear From Professionals Who Transformed Their Careers
            </h3>
            <p className="text-lg text-brand-gray">Real results from real professionals</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "I automated 70% of my weekly reporting. My boss noticed immediately, and I was promoted to lead a new AI initiative within 3 months.",
                author: "Adeola, Senior Analyst",
                result: "Promoted in 3 months"
              },
              {
                quote: "This training gave me the blueprint. I started an AI consulting side-hustle and landed my first $2,000 client in just 6 weeks. It paid for itself 20 times over.",
                author: "Tunde, Marketing Director",
                result: "$2,000 first client"
              },
              {
                quote: "ConsultAI cut my client research time from 20 hours to 2. It paid for itself in the first week.",
                author: "Mark R., Strategy Consultant",
                result: "90% time saved"
              },
              {
                quote: "The proposals I generate with this tool are so targeted that my close rate has increased dramatically. It's like having a junior analyst on demand.",
                author: "Lisa T., Marketing Consultant",
                result: "Higher close rate"
              }
            ].map((item, index) => (
              <Card key={index} className="testimonial-card group hover:scale-105 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-brand-gray italic mb-4 text-lg leading-relaxed">"{item.quote}"</p>
                  <div className="flex items-center justify-between">
                    <p className="text-brand-navy font-semibold">— {item.author}</p>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                      {item.result}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-lg font-bold">
                💰 PRICING
              </span>
            </div>
            <h2 className="text-4xl font-bold text-brand-navy mb-6">Free Masterclass Registration</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Join Dr. Stephen Akintayo for this exclusive free masterclass and transform your career with AI
            </p>
          </div>
          <div className="max-w-md mx-auto">
            {[
              {
                name: "AI FOR PROFESSIONALS",
                price: "$0",
                description: "FREE Masterclass - Limited Time Offer",
                features: ["Live Training Session", "AI Power Pack (5 Ebooks)", "Real-World Case Studies", "Instant Access", "No Credit Card Required"],
                popular: true
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative feature-highlight group hover:scale-105 transition-all duration-300 ${plan.popular ? 'border-brand-blue shadow-glow' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-accent text-white">
                    MOST POPULAR
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-brand-navy">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-brand-navy mb-2">
                    {plan.price}
                  </div>
                  <p className="text-brand-gray">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-blue" />
                        <span className="text-brand-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://pay.gtextglobal.com/ai-for-professional-masterclass/?coupon=AIMASTERCLASS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-lg py-4 rounded-xl font-bold transition-all duration-300 block text-center ${
                      plan.popular 
                        ? 'cta-primary' 
                        : 'cta-secondary'
                    }`}
                  >
                    Start Free Masterclass
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto text-center relative">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold pulse-glow">
              ⚡ LIMITED TIME OFFER
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Being the Best-Kept Secret. Start Being the Obvious Choice.
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join 50,000+ professionals who've already transformed their careers. Start with our free masterclass, then choose the perfect plan to accelerate your AI transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="https://pay.gtextglobal.com/ai-for-professional-masterclass/?coupon=AIMASTERCLASS"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary text-xl px-12 py-6 flex items-center gap-3 group"
            >
              Get Free Masterclass & Start Trial
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="cta-secondary text-xl px-12 py-6">
              Schedule Live Demo
            </button>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Instant Access</span>
            </div>
          </div>
        </div>
      </section>



      {/* Trusted By Logos */}
      <section className="py-12 px-4 bg-white border-t border-brand-gray-light">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <p className="text-brand-gray mb-4">Featured in:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 mb-8">
            <div className="px-6 py-3 bg-brand-gray-light rounded-lg">
              <span className="font-semibold text-brand-navy">Forbes</span> 
            </div>
            <div className="px-6 py-3 bg-brand-gray-light rounded-lg">
              <span className="font-semibold text-brand-navy">Entrepreneur</span>
            </div>
            <div className="px-6 py-3 bg-brand-gray-light rounded-lg">
              <span className="font-semibold text-brand-navy">Inc.</span>
            </div>
            <div className="px-6 py-3 bg-brand-gray-light rounded-lg">
              <span className="font-semibold text-brand-navy">Harvard Business Review</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-brand-gray mb-4">Trusted by consultants at:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="px-8 py-4 bg-brand-gray-light rounded-lg">
                <span className="font-bold text-xl text-brand-navy">Greatday Houston</span> 
              </div>
              <div className="px-8 py-4 bg-brand-gray-light rounded-lg">
                <span className="font-bold text-xl text-brand-navy">Houston Live</span>
              </div>
              <div className="px-8 py-4 bg-brand-gray-light rounded-lg">
                <span className="font-bold text-xl text-brand-navy">Houston Happens</span>
              </div>
              <div className="px-8 py-4 bg-brand-gray-light rounded-lg">
                <span className="font-bold text-xl text-brand-navy">BBC Africa</span>
              </div>
              <div className="px-8 py-4 bg-brand-gray-light rounded-lg">
                <span className="font-bold text-xl text-brand-navy">Everyday Houston</span> 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="#pricing" className="cta-primary text-lg px-6 py-4 flex items-center gap-2 group shadow-2xl">
          Get Free Training
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">AI FOR PROFESSIONALS</div>
              <p className="text-brand-blue-light">Empowering professionals with AI-driven strategies and tools.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-brand-blue-light">
                <li><a href="#" className="hover:text-white transition-colors">Free Masterclass</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Power Pack</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-brand-blue-light">
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partnership</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-brand-navy-light mt-8 pt-8 text-center text-brand-blue-light">
            <p>&copy; 2024 AI FOR PROFESSIONALS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index