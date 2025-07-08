import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, ShoppingCart, Package, Truck } from "lucide-react";

export default function OrderNow() {
  const quickOrderCategories = [
    {
      title: "Electronics",
      description: "Smartphones, laptops, and gadgets",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop",
      link: "/electronics",
    },
    {
      title: "Fashion",
      description: "Clothing, accessories, and beauty",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
      link: "/fashion",
    },
    {
      title: "Groceries",
      description: "Fresh food and daily essentials",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop",
      link: "/groceries",
    },
    {
      title: "Books",
      description: "Educational and entertainment books",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      link: "/books",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[rgb(22,144,199)] to-[rgb(0,0,0)] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Order Now</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Quick and easy ordering with fast delivery to your doorstep
            </p>
          </div>
        </section>

        {/* Quick Order Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How to Order
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#1690C7] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  1. Browse & Select
                </h3>
                <p className="text-gray-600">
                  Choose from thousands of products across various categories
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#1690C7] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Add to Cart</h3>
                <p className="text-gray-600">
                  Add your selected items to cart and review your order
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#1690C7] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  3. Quick Checkout
                </h3>
                <p className="text-gray-600">
                  Secure payment process with multiple payment options
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#1690C7] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">4. Fast Delivery</h3>
                <p className="text-gray-600">
                  Get your products delivered quickly and safely
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Order Categories */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Quick Order by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickOrderCategories.map((category, index) => (
                <Link
                  key={index}
                  to={category.link}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="bg-[#1690C7] text-white px-4 py-2 rounded-lg text-center font-semibold">
                      Order Now
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Express Delivery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Express Delivery Available
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get your orders delivered within 2-4 hours in select cities
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Same Day</h3>
                  <p className="opacity-90">For orders placed before 2 PM</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">2-4 Hours</h3>
                  <p className="opacity-90">Express delivery in metro cities</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Free Shipping</h3>
                  <p className="opacity-90">On orders above ₹500</p>
                </div>
              </div>
              <Link
                to="/"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Support */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Need Help with Your Order?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#1690C7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Speak with our customer service team
                </p>
                <a
                  href="tel:+916395607666"
                  className="text-[#1690C7] font-semibold"
                >
                  +91 6395607666
                </a>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#1690C7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with our support team</p>
                <Link
                  to="/customer-care"
                  className="text-[#1690C7] font-semibold"
                >
                  Start Chat
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#1690C7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p className="text-gray-600 mb-4">Send us your questions</p>
                <a
                  href="mailto:anishsinghrawat5@gmail.com"
                  className="text-[#1690C7] font-semibold"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
