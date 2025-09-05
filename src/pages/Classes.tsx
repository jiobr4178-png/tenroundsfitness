import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, Flame, Target } from "lucide-react";

const Classes = () => {
  const [selectedDay, setSelectedDay] = useState("monday");

  const schedule = {
    monday: [
      { time: "4:00 PM", class: "Open Gym", duration: "60 min", intensity: "All Levels" },
      { time: "5:00 PM", class: "Boxing Basics", duration: "60 min", intensity: "Beginner" },
      { time: "6:00 PM", class: "Strength Training", duration: "45 min", intensity: "Intermediate" },
      { time: "7:00 PM", class: "Advanced Boxing", duration: "60 min", intensity: "Advanced" },
    ],
    tuesday: [
      { time: "4:00 PM", class: "Open Gym", duration: "60 min", intensity: "All Levels" },
      { time: "5:00 PM", class: "Cardio Boxing", duration: "45 min", intensity: "All Levels" },
      { time: "6:00 PM", class: "HIIT Training", duration: "45 min", intensity: "Advanced" },
      { time: "7:00 PM", class: "Kids Boxing", duration: "45 min", intensity: "Youth" },
    ],
    wednesday: [
      { time: "4:00 PM", class: "Personal Training", duration: "60 min", intensity: "Custom" },
      { time: "5:00 PM", class: "Boxing Basics", duration: "60 min", intensity: "Beginner" },
      { time: "6:00 PM", class: "Circuit Training", duration: "45 min", intensity: "Intermediate" },
      { time: "7:00 PM", class: "Sparring Session", duration: "60 min", intensity: "Advanced" },
    ],
    thursday: [
      { time: "4:00 PM", class: "Open Gym", duration: "60 min", intensity: "All Levels" },
      { time: "5:00 PM", class: "Functional Fitness", duration: "45 min", intensity: "All Levels" },
      { time: "6:00 PM", class: "HIIT Training", duration: "45 min", intensity: "Advanced" },
      { time: "7:00 PM", class: "Boxing Conditioning", duration: "60 min", intensity: "Intermediate" },
    ],
    friday: [
      { time: "4:00 PM", class: "Open Gym", duration: "60 min", intensity: "All Levels" },
      { time: "5:00 PM", class: "Boxing Basics", duration: "60 min", intensity: "Beginner" },
      { time: "6:00 PM", class: "Team Training", duration: "60 min", intensity: "All Levels" },
      { time: "7:00 PM", class: "Fight Night Prep", duration: "90 min", intensity: "Competition" },
    ],
    saturday: [
      { time: "11:00 AM", class: "Weekend Warriors", duration: "60 min", intensity: "All Levels" },
      { time: "12:00 PM", class: "Strength & Conditioning", duration: "60 min", intensity: "Intermediate" },
      { time: "1:00 PM", class: "Boxing Bootcamp", duration: "90 min", intensity: "Advanced" },
      { time: "2:30 PM", class: "Open Gym", duration: "30 min", intensity: "All Levels" },
    ],
  };

  const classDescriptions = [
    {
      name: "Boxing Basics",
      icon: <Target className="w-6 h-6" />,
      description: "Learn fundamental boxing techniques, footwork, and proper form. Perfect for beginners looking to start their boxing journey.",
      benefits: ["Proper stance and guard", "Basic punches and combinations", "Defensive movements", "Ring awareness"],
    },
    {
      name: "HIIT Training",
      icon: <Flame className="w-6 h-6" />,
      description: "High-Intensity Interval Training designed to burn maximum calories and improve cardiovascular endurance.",
      benefits: ["Maximum calorie burn", "Improved metabolism", "Enhanced endurance", "Full-body workout"],
    },
    {
      name: "Strength & Conditioning",
      icon: <Users className="w-6 h-6" />,
      description: "Build lean muscle and increase overall strength through targeted resistance training and functional movements.",
      benefits: ["Muscle building", "Increased strength", "Better posture", "Injury prevention"],
    },
    {
      name: "Kids Boxing",
      icon: <Clock className="w-6 h-6" />,
      description: "Fun and engaging boxing classes designed specifically for young athletes aged 8-15.",
      benefits: ["Discipline and focus", "Self-confidence", "Physical fitness", "Anti-bullying skills"],
    },
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity.toLowerCase()) {
      case "beginner":
        return "text-green-600 bg-green-100";
      case "intermediate":
        return "text-yellow-600 bg-yellow-100";
      case "advanced":
        return "text-orange-600 bg-orange-100";
      case "competition":
        return "text-red-600 bg-red-100";
      case "youth":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-6">
            CLASSES & <span className="text-secondary">SCHEDULE</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            From beginner-friendly boxing basics to advanced conditioning, we have the perfect class for every fitness level.
          </p>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center mb-12">
            WEEKLY <span className="text-primary">SCHEDULE</span>
          </h2>
          
          <Tabs value={selectedDay} onValueChange={setSelectedDay} className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full mb-8">
              <TabsTrigger value="monday">Monday</TabsTrigger>
              <TabsTrigger value="tuesday">Tuesday</TabsTrigger>
              <TabsTrigger value="wednesday">Wednesday</TabsTrigger>
              <TabsTrigger value="thursday">Thursday</TabsTrigger>
              <TabsTrigger value="friday">Friday</TabsTrigger>
              <TabsTrigger value="saturday">Saturday</TabsTrigger>
            </TabsList>

            {Object.entries(schedule).map(([day, classes]) => (
              <TabsContent key={day} value={day} className="space-y-4">
                {classes.map((classItem, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-display text-2xl text-primary">{classItem.time}</span>
                          <h3 className="font-semibold text-xl">{classItem.class}</h3>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {classItem.duration}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getIntensityColor(classItem.intensity)}`}>
                            {classItem.intensity}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" className="mt-4 md:mt-0">
                        Join Class
                      </Button>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-8 text-center text-muted-foreground">
            <p className="text-lg">
              <strong>Sunday:</strong> Closed | <strong>Hours:</strong> Mon-Fri 4:00 PM - 8:00 PM | Sat 11:00 AM - 3:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Class Descriptions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center mb-12">
            FEATURED <span className="text-primary">CLASSES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {classDescriptions.map((classInfo, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-primary">{classInfo.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-2xl mb-3">{classInfo.name}</h3>
                    <p className="text-muted-foreground mb-4">{classInfo.description}</p>
                    <ul className="space-y-2">
                      {classInfo.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="default" className="mt-6">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Classes;