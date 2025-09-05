import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Membership = () => {
  const plans = [
    {
      name: "Basic",
      price: "$49",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "Access to gym during operating hours",
        "Use of all basic equipment",
        "Locker room access",
        "1 guest pass per month",
        "Access to open gym sessions",
      ],
      notIncluded: [
        "Group fitness classes",
        "Personal training sessions",
        "Advanced equipment access",
        "Nutrition consultation",
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: "$89",
      period: "/month",
      description: "Our most popular membership",
      features: [
        "Everything in Basic, plus:",
        "Unlimited group fitness classes",
        "Access to all equipment",
        "2 guest passes per month",
        "Priority class booking",
        "Monthly body composition analysis",
        "Access to member events",
      ],
      notIncluded: [
        "Personal training sessions",
        "Nutrition consultation",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$149",
      period: "/month",
      description: "The ultimate fitness experience",
      features: [
        "Everything in Standard, plus:",
        "2 personal training sessions/month",
        "Quarterly nutrition consultation",
        "Unlimited guest passes",
        "Priority equipment access",
        "Custom workout plans",
        "Recovery room access",
        "Exclusive premium member events",
        "Free merchandise quarterly",
      ],
      notIncluded: [],
      popular: false,
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-6">
            MEMBERSHIP <span className="text-secondary">PLANS</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Choose the perfect membership plan for your fitness journey. No contracts, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-8 hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? "border-2 border-primary scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      BEST VALUE
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-display text-3xl mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="font-display text-5xl text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {plan.notIncluded.length > 0 && (
                    <div className="pt-4 border-t border-border space-y-3">
                      {plan.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 opacity-50">
                          <span className="w-5 h-5 mt-0.5 flex-shrink-0 text-center text-muted-foreground">×</span>
                          <span className="text-sm line-through">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/contact" className="block">
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    Sign Up Today
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center mb-12">
            ALL MEMBERSHIPS <span className="text-primary">INCLUDE</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center">
              <h3 className="font-semibold text-xl mb-2">No Contract</h3>
              <p className="text-muted-foreground">Month-to-month membership with the freedom to cancel anytime.</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="font-semibold text-xl mb-2">Free Trial</h3>
              <p className="text-muted-foreground">Try your first class absolutely free before committing.</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="font-semibold text-xl mb-2">Family Discount</h3>
              <p className="text-muted-foreground">Get 20% off additional family member memberships.</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="font-semibold text-xl mb-2">Student Discount</h3>
              <p className="text-muted-foreground">Students and military receive 15% off all membership plans.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-secondary-foreground mb-6">
            READY TO COMMIT TO YOUR FITNESS?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our community today and start your transformation. First class is always free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start Your Free Trial
              </Button>
            </Link>
            <Link to="/classes">
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary">
                View Class Schedule
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Membership;