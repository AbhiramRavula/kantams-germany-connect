import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white text-primary font-bold text-xl px-2 py-1 rounded">
                K
              </div>
              <span className="text-xl font-bold">Kantams</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Connect skilled medical professionals worldwide with top healthcare opportunities in Germany, offering end-to-end relocation support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/germany-jobs" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Skilled VISAs
                </Link>
              </li>
              <li>
                <Link to="/nursing-jobs" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Nursing Jobs
                </Link>
              </li>
              <li>
                <Link to="/nursing-ausbildung" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Nursing Ausbildung
                </Link>
              </li>
              <li>
                <Link to="/visas" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Types of VISAs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/germany-jobs" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Skilled Worker VISA
                </Link>
              </li>
              <li>
                <Link to="/nursing-jobs" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Nursing Migration
                </Link>
              </li>
              <li>
                <Link to="/nursing-ausbildung" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Ausbildung Programs
                </Link>
              </li>
              <li>
                <Link to="/visas" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Job Placement
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Language Training
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Document Processing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary-foreground/80" />
                <div>
                  <p className="text-primary-foreground/80">+91 9876543210</p>
                  <p className="text-primary-foreground/80">+91 9876543211</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary-foreground/80" />
                <div>
                  <p className="text-primary-foreground/80">info@kantams.com</p>
                  <p className="text-primary-foreground/80">support@kantams.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-foreground/80" />
                <p className="text-primary-foreground/80">
                  123 Business Center,<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-primary-foreground/80">
              © 2024 Kantams Migration Consultancy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-primary-foreground/80 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;