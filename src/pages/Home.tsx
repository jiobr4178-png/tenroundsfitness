import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Dumbbell, Users, Target, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-boxing.jpg";

const Home = () => {
  const features = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Boxing Training",
      description: "Professional boxing instruction for all skill levels with certified trainers.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Fitness",
      description: "High-energy group classes designed to push your limits and build community.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personal Training",
      description: "One-on-one coaching tailored to your specific fitness goals and needs.",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Strength & Conditioning",
      description: "Build muscle, increase endurance, and transform your physique.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 animate-fade-up">
            TRAIN HARD. STAY STRONG.
            <span className="block text-primary">BE UNSTOPPABLE.</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-up animation-delay-200">
            Welcome to 10 Rounds of Fitness - Jacksonville's premier boxing and fitness training facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Join Now
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/classes">
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary">
                View Classes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              WHY CHOOSE <span className="text-primary">10 ROUNDS?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the perfect combination of boxing, strength training, and conditioning in a supportive community environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card"
              >
                <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
            READY TO START YOUR FITNESS JOURNEY?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our community today and discover what you're truly capable of. First class is free for new members!
          </p>
          <Link to="/membership">
            <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              View Membership Plans
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-4">CLASS SCHEDULE</h2>
            <p className="text-muted-foreground text-lg">
              Monday - Friday: 4:00 PM - 8:00 PM | Saturday: 11:00 AM - 3:00 PM
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="font-semibold text-xl mb-2 text-primary">Boxing Basics</h3>
              <p className="text-muted-foreground mb-4">Perfect for beginners looking to learn proper form and technique.</p>
              <p className="font-medium">Mon, Wed, Fri - 5:00 PM</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-xl mb-2 text-primary">HIIT Training</h3>
              <p className="text-muted-foreground mb-4">High-intensity interval training for maximum calorie burn.</p>
              <p className="font-medium">Tue, Thu - 6:00 PM</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-xl mb-2 text-primary">Strength & Conditioning</h3>
              <p className="text-muted-foreground mb-4">Build muscle and increase your overall strength.</p>
              <p className="font-medium">Saturday - 12:00 PM</p>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/classes">
              <Button variant="default" size="lg">
                View Full Schedule
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;