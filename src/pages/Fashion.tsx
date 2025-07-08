import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shirt, User, ShoppingBag, Diamond, Gem, Watch } from "lucide-react";

export default function Fashion() {
  const categories = [
    {
      icon: Shirt,
      title: "Men's Fashion",
      description: "Trendy clothing and accessories for men",
      image:
        "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=300&h=200&fit=crop",
    },
    {
      icon: User,
      title: "Women's Fashion",
      description: "Elegant dresses and stylish outfits for women",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=200&fit=crop",
    },
    {
      icon: ShoppingBag,
      title: "Bags & Accessories",
      description: "Handbags, wallets, and fashion accessories",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
    },
    {
      icon: Diamond,
      title: "Jewelry",
      description: "Beautiful jewelry for every occasion",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop",
    },
    {
      icon: Gem,
      title: "Beauty Products",
      description: "Skincare, makeup, and beauty essentials",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop",
    },
    {
      icon: Watch,
      title: "Watches",
      description: "Stylish watches for every lifestyle",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=200&fit=crop",
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
              Fashion & Beauty
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Discover the latest trends in fashion and beauty products that
              make you shine
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
                      Shop {category.title}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fashion Trends */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Latest Fashion Trends
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#1690C7]">
                  Spring/Summer 2025 Collection
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-[#1690C7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="text-xs">•</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Sustainable Fashion</h4>
                      <p className="text-gray-600">
                        Eco-friendly materials and ethical production
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#1690C7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="text-xs">•</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Bold Colors</h4>
                      <p className="text-gray-600">
                        Vibrant hues and eye-catching patterns
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#1690C7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="text-xs">•</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Minimalist Designs</h4>
                      <p className="text-gray-600">
                        Clean lines and timeless silhouettes
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop"
                  alt="Fashion Trends"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Special Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Women's Day Special</h3>
                <p className="mb-4">Up to 60% off on women's fashion</p>
                <p className="text-sm opacity-90">Limited time offer</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Buy 2 Get 1 Free</h3>
                <p className="mb-4">On selected beauty products</p>
                <p className="text-sm opacity-90">Mix and match available</p>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Free Styling Tips</h3>
                <p className="mb-4">Personal styling consultation</p>
                <p className="text-sm opacity-90">With fashion experts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Beauty Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Beauty Essentials
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#1690C7]">
                  Skincare
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium skincare products for healthy, glowing skin
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Cleansers & Toners</li>
                  <li>• Moisturizers & Serums</li>
                  <li>• Sunscreen & Anti-aging</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#1690C7]">
                  Makeup
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional makeup products for every look
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Foundation & Concealer</li>
                  <li>• Lipsticks & Lip Care</li>
                  <li>• Eye Makeup & Tools</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#1690C7]">
                  Hair Care
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete hair care solutions for all hair types
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Shampoos & Conditioners</li>
                  <li>• Hair Treatments & Oils</li>
                  <li>• Styling Products</li>
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
