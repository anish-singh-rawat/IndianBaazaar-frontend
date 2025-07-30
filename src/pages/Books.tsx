import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Book, GraduationCap, Heart, Zap } from "lucide-react";

export default function Books() {
  const categories = [
    {
      icon: GraduationCap,
      title: "Educational Books",
      description: "Textbooks and academic resources",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
    },
    {
      icon: Heart,
      title: "Fiction & Romance",
      description: "Novels, stories, and romantic literature",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=200&fit=crop",
    },
    {
      icon: Zap,
      title: "Self-Help & Motivation",
      description: "Personal development and motivational books",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    },
    {
      icon: Book,
      title: "Non-Fiction",
      description: "Biography, history, and factual books",
      image:
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[rgb(22,144,199)] to-[rgb(0,0,0)] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Books</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Discover thousands of books across all genres and subjects
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Browse by Category
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
                      Browse Books
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Books */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured Books
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  Bestsellers
                </h3>
                <p className="text-gray-600 mb-4">
                  Top-rated books across all categories
                </p>
                <p className="text-sm text-gray-500">Updated weekly</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  New Arrivals
                </h3>
                <p className="text-gray-600 mb-4">
                  Latest releases from popular authors
                </p>
                <p className="text-sm text-gray-500">Fresh content monthly</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  Discounted Books
                </h3>
                <p className="text-gray-600 mb-4">
                  Great books at great prices
                </p>
                <p className="text-sm text-gray-500">Up to 50% off</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
