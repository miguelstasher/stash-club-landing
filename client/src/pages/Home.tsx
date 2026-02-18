import { Navbar } from "@/components/Navbar";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Euro, 
  MapPin, 
  Sparkles,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/image_1771343025564.png";

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/7sYeVde7a9CB1QX9KH9MY0o";

export default function Home() {
  const handleJoin = () => {
    window.open(STRIPE_PAYMENT_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-300 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#026FE3]"></span>
                <span className="text-sm font-medium text-[#026FE3]" data-testid="text-limited-offer">Limited time offer</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#101828] tracking-tight mb-6 leading-[1.1]" data-testid="text-hero-title">
                Join <span className="text-[#026FE3]">Stash Club</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed" data-testid="text-hero-subtitle">
                Only <span className="font-bold text-[#026FE3]">£1.99</span> for a year. Save <span className="font-bold text-[#026FE3]">50%</span> on all bookings.
              </p>

              <p className="text-lg text-gray-500 mb-8" data-testid="text-hero-description">
                Join in less than a minute. Start saving immediately.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                <Button 
                  onClick={handleJoin}
                  className="btn-brand text-lg h-14 px-10 w-full sm:w-auto"
                  data-testid="button-hero-join"
                >
                  Join Stash Club
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="flex items-center flex-wrap gap-6 text-sm text-gray-500 font-medium">
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

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block"
            >
              <img 
                src={heroImage} 
                alt="Travelers with luggage using Stasher" 
                className="w-full h-auto rounded-3xl shadow-2xl object-cover max-h-[560px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-gray-50 scroll-mt-16">
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
              description="Pay £1.99 for your annual Stash Club membership."
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

      {/* Reviews Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#101828] mb-4" data-testid="text-reviews-title">Why customers trust us to store their bags</h2>
            <p className="text-lg text-gray-600">Real and recent reviews from happy travelers</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 items-start">
            {/* Trustpilot Summary */}
            <div className="flex flex-col items-center text-center p-6" data-testid="trustpilot-summary">
              <span className="text-2xl font-bold text-[#101828] mb-2">Excellent</span>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-7 h-7 bg-[#00b67a] flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-1">Based on <span className="font-semibold text-[#101828] underline">3,779 reviews</span></p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />
                <span className="text-sm font-semibold text-[#101828]">Trustpilot</span>
              </div>
            </div>

            {/* Review 1 */}
            <div className="bg-white border border-gray-200 rounded-md p-5" data-testid="card-review-1">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-white" />
                  </div>
                ))}
              </div>
              <h4 className="font-bold text-[#101828] text-sm mb-2">Used the Stasher at Euston Rd</h4>
              <p className="text-sm text-gray-600 mb-3">Used the Stasher at Euston Rd. in London. Swift service and friendly staff.</p>
              <p className="text-xs text-gray-400"><span className="font-semibold text-[#101828]">Jan</span>, 22 hours ago</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white border border-gray-200 rounded-md p-5" data-testid="card-review-2">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-white" />
                  </div>
                ))}
              </div>
              <h4 className="font-bold text-[#101828] text-sm mb-2">Great Idea</h4>
              <p className="text-sm text-gray-600 mb-3">Simple, flexible way to store luggage, with keen pricing, what's not to like!</p>
              <p className="text-xs text-gray-400"><span className="font-semibold text-[#101828]">Stephen Docker</span>, 23 hours ago</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white border border-gray-200 rounded-md p-5" data-testid="card-review-3">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-white" />
                  </div>
                ))}
              </div>
              <h4 className="font-bold text-[#101828] text-sm mb-2">Everything went really smoothly</h4>
              <p className="text-sm text-gray-600 mb-3">Everything went really smoothly, I'd certainly use Stasher again.</p>
              <p className="text-xs text-gray-400"><span className="font-semibold text-[#101828]">The Venerable</span>, 23 hours ago</p>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-xs text-gray-400">Showing our 5 star reviews</p>
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
              Save on all Stasher bookings for a year. Whether you're a weekend explorer or a theatre regular, Stash Club pays for itself in one booking.
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
              className="relative z-20 bg-white text-[#026FE3] hover:bg-gray-100 hover:text-blue-700 font-bold rounded-[34px] px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
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
            Currently in trial, only available to select customers. Stash Club membership is valid for 12 months from the date of purchase. Terms and conditions apply.
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
