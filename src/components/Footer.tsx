import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-display text-2xl mb-4">10 ROUNDS OF FITNESS</h3>
            <p className="text-muted-foreground">
              Train Hard. Stay Strong. Be Unstoppable. Join our community and transform your life through boxing and fitness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-muted-foreground hover:text-primary transition-colors">
                  Classes & Schedule
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-muted-foreground hover:text-primary transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-primary mt-1" />
                <span>933 Lejeune Blvd, Jacksonville, NC 28540</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <a href="tel:+19104677825" className="hover:text-primary transition-colors">
                  +1 910-467-7825
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-primary mt-1" />
                <div>
                  <p>Mon-Fri: 4:00 PM - 8:00 PM</p>
                  <p>Saturday: 11:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 10 Rounds of Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;