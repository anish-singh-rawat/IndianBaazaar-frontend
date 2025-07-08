import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Heart, Lightbulb, Target } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[rgb(22,144,199)] to-[rgb(0,0,0)] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About IndianBaazaar
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Your trusted marketplace connecting communities with quality
              products and exceptional service
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-[#1690C7] mr-3" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To democratize commerce by providing a platform where everyone
                  can access quality products at fair prices. We believe
                  shopping should be simple, secure, and satisfying for every
                  customer, regardless of their location or budget.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-8 w-8 text-[#1690C7] mr-3" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the most trusted and innovative marketplace in
                  India, where customers find everything they need with
                  confidence, and where businesses of all sizes can thrive and
                  grow together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Principles */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Core Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Shield className="h-12 w-12 text-[#1690C7] mb-6" />
                <h3 className="text-2xl font-semibold mb-4">
                  Trust & Security
                </h3>
                <p className="text-gray-600">
                  We prioritize the security of your personal information and
                  transactions. Our platform uses advanced encryption and
                  security measures to protect your data and ensure safe
                  shopping.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <Heart className="h-12 w-12 text-[#1690C7] mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Customer Care</h3>
                <p className="text-gray-600">
                  Every customer is valuable to us. We're committed to providing
                  exceptional support, listening to feedback, and continuously
                  improving our services to exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              IndianBaazaar by Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#1690C7] mb-2">
                  10K+
                </div>
                <div className="text-gray-600 text-lg">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#1690C7] mb-2">
                  50K+
                </div>
                <div className="text-gray-600 text-lg">Products Available</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#1690C7] mb-2">
                  500+
                </div>
                <div className="text-gray-600 text-lg">Trusted Sellers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#1690C7] mb-2">
                  99%
                </div>
                <div className="text-gray-600 text-lg">
                  Customer Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center shadow-md">
                <div className="w-24 h-24 bg-[#1690C7] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">AR</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Anish Rawat</h3>
                <p className="text-[#1690C7] mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Leading the vision and strategy to make IndianBaazaar the
                  preferred choice for online shopping.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center shadow-md">
                <div className="w-24 h-24 bg-[#1690C7] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">IT</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tech Team</h3>
                <p className="text-[#1690C7] mb-3">Technology Division</p>
                <p className="text-gray-600 text-sm">
                  Dedicated developers ensuring our platform remains fast,
                  secure, and user-friendly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center shadow-md">
                <div className="w-24 h-24 bg-[#1690C7] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">CS</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Support Team</h3>
                <p className="text-[#1690C7] mb-3">Customer Success</p>
                <p className="text-gray-600 text-sm">
                  Available 24/7 to assist customers and ensure the best
                  shopping experience possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Have questions or suggestions? We'd love to hear from you. Our
              team is always ready to help and improve your experience.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a
                href="mailto:anishsinghrawat5@gmail.com"
                className="inline-block bg-[#1690C7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:+916395607666"
                className="inline-block border-2 border-[#1690C7] text-[#1690C7] px-8 py-3 rounded-lg font-semibold hover:bg-[#1690C7] hover:text-white transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
