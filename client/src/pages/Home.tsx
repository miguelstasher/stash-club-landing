import { Navbar } from "@/components/Navbar";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Euro, 
  MapPin, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/YOUR_STRIPE_LINK";

export default function Home() {
  const handleJoin = () => {
    window.open(STRIPE_PAYMENT_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-300 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#026FE3]"></span>
                <span className="text-sm font-medium text-[#026FE3]" data-testid="text-limited-offer">Limited time offer</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-[#101828] tracking-tight mb-6 leading-[1.1]" data-testid="text-hero-title">
                Join <span className="text-[#026FE3]">Stash Club</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed" data-testid="text-hero-subtitle">
                Only <span className="font-bold text-[#026FE3]">£1.99</span> for <span className="font-bold text-[#026FE3]">50% off</span> for a year.
              </p>

              <p className="text-lg text-gray-500 mb-8" data-testid="text-hero-description">
                Join in less than a minute. Start saving immediately.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button 
                  onClick={handleJoin}
                  className="btn-brand text-lg h-14 px-10 w-full sm:w-auto"
                  data-testid="button-hero-join"
                >
                  Join Stash Club
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="flex items-center justify-center flex-wrap gap-6 text-sm text-gray-500 font-medium">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Unlimited usage
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Valid for 12 months
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="w-full h-64 md:h-96 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
          alt="Happy traveler walking in city" 
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* How it works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#101828] mb-4" data-testid="text-how-it-works-title">How it works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="text-how-it-works-description">
              Join in less than a minute. Start saving immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-0 border-t-2 border-dashed border-gray-300"></div>

            <FeatureCard 
              icon={<Euro className="w-6 h-6" />}
              title="1. Join Stash Club"
              description="Click the button below and complete payment on our secure Stripe page. It only takes a moment."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Sparkles className="w-6 h-6" />}
              title="2. Get Your Code"
              description="We'll email you a unique 50% discount code linked to your email address."
              delay={0.2}
            />
            <FeatureCard 
              icon={<MapPin className="w-6 h-6" />}
              title="3. Save Everywhere"
              description="Use your code to get 50% off every single booking you make for a year."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Why Join / Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#026FE3] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 text-white" data-testid="text-why-join-title">Why join Stash Club?</h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 relative z-10">
              Most users save over £50 per year on luggage storage. Whether you're a digital nomad or a weekend explorer, membership pays for itself in one booking.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 mb-10">
              <div className="p-4">
                <div className="text-4xl font-bold mb-1">50%</div>
                <div className="text-blue-200 text-sm">Discount on every booking</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold mb-1">£1.99</div>
                <div className="text-blue-200 text-sm">Cost for entire year</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold mb-1">4000+</div>
                <div className="text-blue-200 text-sm">Locations worldwide</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold mb-1">24/7</div>
                <div className="text-blue-200 text-sm">Customer support</div>
              </div>
            </div>

            <Button 
              onClick={handleJoin}
              className="bg-white text-[#026FE3] hover:bg-gray-100 hover:text-blue-700 font-bold rounded-[34px] px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              data-testid="button-cta-join"
            >
              Join Stash Club
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* T&Cs Notice */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400" data-testid="text-trial-notice">
            Currently in trial, only available to select customers. Stash Club membership is valid for 12 months from the date of purchase. 50% discount applies to the storage fee only. Terms and conditions apply.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-bold text-lg mb-4 text-[#101828]">Stasher</h3>
              <p className="text-gray-500 text-sm">
                The world's first luggage storage network.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#101828]">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="https://stasher.com/about" className="hover:text-[#026FE3]">About us</a></li>
                <li><a href="https://stasher.com/careers" className="hover:text-[#026FE3]">Careers</a></li>
                <li><a href="https://stasher.com/press" className="hover:text-[#026FE3]">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#101828]">Support</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="https://stasher.com/help" className="hover:text-[#026FE3]">Help Center</a></li>
                <li><a href="https://stasher.com/contact" className="hover:text-[#026FE3]">Contact Us</a></li>
                <li><a href="https://stasher.com/terms" className="hover:text-[#026FE3]">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#101828]">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="https://stasher.com/privacy" className="hover:text-[#026FE3]">Privacy Policy</a></li>
                <li><a href="https://stasher.com/cookies" className="hover:text-[#026FE3]">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Stasher. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
