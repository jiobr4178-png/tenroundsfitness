import { Card } from "@/components/ui/card";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import gymInterior from "@/assets/gym-interior.jpg";

const About = () => {
  const trainers = [
    {
      name: "Mike Thompson",
      role: "Head Boxing Coach",
      specialization: "Boxing & Conditioning",
      bio: "With 15 years of competitive boxing experience and 10 years of coaching, Mike brings championship-level training to every session.",
      image: trainer1,
    },
    {
      name: "Sarah Martinez",
      role: "Fitness Director",
      specialization: "HIIT & Group Fitness",
      bio: "Certified personal trainer and group fitness instructor with a passion for helping clients achieve their fitness goals through innovative training methods.",
      image: trainer2,
    },
    {
      name: "James Wilson",
      role: "Strength Coach",
      specialization: "Strength & Conditioning",
      bio: "Former college athlete turned certified strength coach, specializing in building functional strength and athletic performance.",
      image: trainer3,
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground text-center mb-6">
            ABOUT <span className="text-primary">10 ROUNDS</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            More than just a gym - we're a community dedicated to helping you become the strongest version of yourself.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl mb-6">
                OUR <span className="text-primary">STORY</span>
              </h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Founded in Jacksonville, NC, 10 Rounds of Fitness was born from a simple belief: everyone has a fighter within them waiting to be unleashed. Our gym combines the discipline and intensity of boxing with modern fitness training methods to create a unique workout experience.
              </p>
              <p className="text-muted-foreground mb-4 text-lg">
                We're not just about building physical strength - we're about building mental toughness, confidence, and a supportive community. Whether you're a complete beginner or an experienced athlete, our doors are open to anyone ready to push their limits.
              </p>
              <p className="text-muted-foreground text-lg">
                At 10 Rounds, we believe that fitness is a journey, not a destination. Every workout, every round, every rep brings you closer to your goals. Join us and discover what you're truly capable of.
              </p>
            </div>
            <div className="relative">
              <img
                src={gymInterior}
                alt="10 Rounds of Fitness Interior"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <p className="font-display text-3xl">EST. 2020</p>
                <p className="text-sm uppercase tracking-wider">Jacksonville, NC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center mb-12">
            OUR <span className="text-primary">VALUES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <h3 className="font-semibold text-2xl mb-4 text-primary">Discipline</h3>
              <p className="text-muted-foreground">
                We believe in the power of consistency and dedication. Every champion was once a beginner who refused to give up.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="font-semibold text-2xl mb-4 text-primary">Community</h3>
              <p className="text-muted-foreground">
                Our gym is more than equipment and walls - it's a family that supports, motivates, and celebrates together.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="font-semibold text-2xl mb-4 text-primary">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from our training programs to the support we provide our members.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center mb-12">
            MEET OUR <span className="text-primary">TRAINERS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-1">{trainer.name}</h3>
                  <p className="text-primary font-medium mb-2">{trainer.role}</p>
                  <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">
                    {trainer.specialization}
                  </p>
                  <p className="text-muted-foreground">{trainer.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;