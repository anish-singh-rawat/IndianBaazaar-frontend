import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Book, Users, Award, Globe } from "lucide-react";

export default function LearnMore() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[rgb(22,144,199)] to-[rgb(0,0,0)] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn More About IndianBaazaar
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Discover our story, mission, and commitment to bringing you the
              best products at unbeatable prices
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  IndianBaazaar was founded with a simple vision: to create a
                  marketplace where quality meets affordability. We started as a
                  small team passionate about bringing the best products from
                  around the world to your doorstep.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Today, we've grown into a trusted platform serving thousands
                  of customers, offering everything from cutting-edge
                  electronics to trendy fashion, fresh groceries to bestselling
                  books.
                </p>
                <p className="text-lg text-gray-600">
                  Our commitment remains unchanged: providing exceptional value,
                  outstanding service, and a seamless shopping experience for
                  every customer.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                  alt="Our Story"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Book className="h-12 w-12 text-[#1690C7] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-gray-600">
                  We carefully curate every product to ensure it meets our high
                  standards of quality and reliability.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Users className="h-12 w-12 text-[#1690C7] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We listen, adapt, and
                  continuously improve based on your feedback.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Award className="h-12 w-12 text-[#1690C7] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from product
                  selection to customer service.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Globe className="h-12 w-12 text-[#1690C7] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
                <p className="text-gray-600">
                  Connecting local communities with global opportunities and
                  bringing the world to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose IndianBaazaar?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  Best Prices
                </h3>
                <p className="text-gray-600 mb-4">
                  We work directly with manufacturers and suppliers to bring you
                  the most competitive prices in the market.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Price matching guarantee</li>
                  <li>• Regular discounts and offers</li>
                  <li>• Bulk purchase benefits</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  Fast Delivery
                </h3>
                <p className="text-gray-600 mb-4">
                  Quick and reliable delivery service ensuring your products
                  reach you when you need them.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Same-day delivery available</li>
                  <li>• Real-time tracking</li>
                  <li>• Secure packaging</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  Customer Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Our dedicated support team is always ready to help you with
                  any questions or concerns.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 24/7 customer support</li>
                  <li>• Easy returns policy</li>
                  <li>• Live chat assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
