import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Apple, Beef, Coffee, Milk } from "lucide-react";

export default function Groceries() {
  const categories = [
    {
      icon: Apple,
      title: "Fresh Fruits & Vegetables",
      description: "Farm-fresh produce delivered daily",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop",
    },
    {
      icon: Milk,
      title: "Dairy Products",
      description: "Milk, cheese, yogurt, and more",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=200&fit=crop",
    },
    {
      icon: Beef,
      title: "Meat & Seafood",
      description: "Fresh meat and seafood selections",
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=200&fit=crop",
    },
    {
      icon: Coffee,
      title: "Beverages",
      description: "Drinks, juices, and beverages",
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[rgb(22,144,199)] to-[rgb(0,0,0)] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Groceries</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Fresh groceries delivered to your doorstep daily
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Shop by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      Shop Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fresh Guarantee */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Fresh Guarantee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  Farm Fresh
                </h3>
                <p className="text-gray-600">
                  Direct from farms to ensure maximum freshness and quality
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  Same Day Delivery
                </h3>
                <p className="text-gray-600">
                  Order before 12 PM and get delivery the same day
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  100% satisfaction guarantee on all fresh products
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
