import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import gymInterior from "@/assets/gym-interior.jpg";
import groupClass from "@/assets/group-class.jpg";
import trainingSession from "@/assets/training-session.jpg";
import equipment from "@/assets/equipment.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: gymInterior, alt: "Modern gym interior", category: "Facility" },
    { src: groupClass, alt: "Group fitness class", category: "Classes" },
    { src: trainingSession, alt: "Boxing training session", category: "Training" },
    { src: equipment, alt: "Professional equipment", category: "Equipment" },
    { src: gymInterior, alt: "Training area", category: "Facility" },
    { src: groupClass, alt: "HIIT class in action", category: "Classes" },
    { src: trainingSession, alt: "Personal training", category: "Training" },
    { src: equipment, alt: "Weight training area", category: "Equipment" },
  ];

  const categories = ["All", "Facility", "Classes", "Training", "Equipment"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-6">
            OUR <span className="text-secondary">GALLERY</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art facility and see our community in action.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {image.category}
                  </p>
                  <p className="font-medium">{image.alt}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain animate-scale-in"
          />
        </div>
      )}

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl mb-6">
            EXPERIENCE <span className="text-primary">10 ROUNDS</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nothing beats experiencing our gym in person. Schedule a tour today and see why our members love training here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+19104677825" className="inline-block">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary-glow transition-all duration-300 hover:scale-105">
                Call Us: (910) 467-7825
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;