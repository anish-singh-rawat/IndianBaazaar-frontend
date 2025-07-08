import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChefHat, Utensils, Microwave, Coffee } from "lucide-react";

export default function Kitchen() {
  const categories = [
    {
      icon: ChefHat,
      title: "Cookware",
      description: "Pots, pans, and cooking essentials",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
    },
    {
      icon: Utensils,
      title: "Kitchen Tools",
      description: "Knives, cutting boards, and utensils",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
    },
    {
      icon: Microwave,
      title: "Appliances",
      description: "Kitchen appliances and gadgets",
      image:
        "https://images.unsplash.com/photo-1556909114-7f36b48fdf9e?w=300&h=200&fit=crop",
    },
    {
      icon: Coffee,
      title: "Tableware",
      description: "Plates, cups, and dining accessories",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[rgb(22,144,199)] to-[rgb(0,0,0)] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Kitchen</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Everything you need to create amazing meals
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Kitchen Categories
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
                      Shop {category.title}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured Kitchen Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  Professional Grade
                </h3>
                <p className="text-gray-600">
                  Restaurant-quality cookware for home chefs
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  Smart Appliances
                </h3>
                <p className="text-gray-600">
                  Modern kitchen appliances with smart features
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  Eco-Friendly
                </h3>
                <p className="text-gray-600">
                  Sustainable kitchen products for conscious cooking
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
