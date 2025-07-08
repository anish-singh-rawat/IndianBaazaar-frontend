import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Smartphone,
  Laptop,
  Headphones,
  Camera,
  Watch,
  Gamepad2,
} from "lucide-react";

export default function Electronics() {
  const categories = [
    {
      icon: Smartphone,
      title: "Smartphones",
      description: "Latest smartphones with cutting-edge technology",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
    },
    {
      icon: Laptop,
      title: "Laptops & Computers",
      description: "High-performance laptops and desktop computers",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
    },
    {
      icon: Headphones,
      title: "Audio & Headphones",
      description: "Premium headphones and audio equipment",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    },
    {
      icon: Camera,
      title: "Cameras",
      description: "Professional and consumer cameras",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop",
    },
    {
      icon: Watch,
      title: "Smartwatches",
      description: "Feature-rich smartwatches and fitness trackers",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Gaming consoles, accessories, and peripherals",
      image:
        "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[rgb(22,144,199)] to-[rgb(0,0,0)] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Electronics & Gadgets
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Discover the latest technology and gadgets at unbeatable prices
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Shop by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <category.icon className="h-8 w-8 text-[#1690C7] mr-3" />
                      <h3 className="text-xl font-semibold">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <button className="bg-[#1690C7] text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                      Browse {category.title}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Deals */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured Electronics Deals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  Up to 50% Off
                </h3>
                <p className="text-gray-600 mb-4">Smartphones & Tablets</p>
                <p className="text-sm text-gray-500">
                  Limited time offer on selected brands
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  Free Shipping
                </h3>
                <p className="text-gray-600 mb-4">
                  On Electronics above ₹2,000
                </p>
                <p className="text-sm text-gray-500">
                  Fast delivery to your doorstep
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  Extended Warranty
                </h3>
                <p className="text-gray-600 mb-4">1 Year additional warranty</p>
                <p className="text-sm text-gray-500">
                  On premium electronic products
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Electronics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our Electronics?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-[#1690C7] text-white rounded-full p-2 mr-4 mt-1">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Authentic Products
                      </h3>
                      <p className="text-gray-600">
                        All electronics are sourced directly from authorized
                        dealers and manufacturers.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#1690C7] text-white rounded-full p-2 mr-4 mt-1">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Best Prices
                      </h3>
                      <p className="text-gray-600">
                        Competitive pricing with regular discounts and special
                        offers.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#1690C7] text-white rounded-full p-2 mr-4 mt-1">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Expert Support
                      </h3>
                      <p className="text-gray-600">
                        Technical support and guidance from our electronics
                        specialists.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                  alt="Electronics Store"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
