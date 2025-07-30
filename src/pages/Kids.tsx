import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Baby, Gamepad2, Shirt, GraduationCap } from "lucide-react";

export default function Kids() {
  const categories = [
    {
      icon: Shirt,
      title: "Kids Fashion",
      description: "Trendy clothes for children of all ages",
      image:
        "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=200&fit=crop",
    },
    {
      icon: Gamepad2,
      title: "Toys & Games",
      description: "Fun toys and educational games",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    },
    {
      icon: GraduationCap,
      title: "Educational",
      description: "Learning materials and school supplies",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop",
    },
    {
      icon: Baby,
      title: "Baby Care",
      description: "Essential products for babies and toddlers",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[rgb(22,144,199)] to-[rgb(0,0,0)] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Kids</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Everything your children need to grow, learn, and play
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Shop for Kids
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

        {/* Age Groups */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Shop by Age Group
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  0-2 Years
                </h3>
                <p className="text-gray-600">
                  Baby essentials and toddler needs
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  3-5 Years
                </h3>
                <p className="text-gray-600">
                  Preschool toys and learning materials
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  6-12 Years
                </h3>
                <p className="text-gray-600">School-age children's products</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold mb-4 text-[#1690C7]">
                  13+ Years
                </h3>
                <p className="text-gray-600">Teen fashion and accessories</p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Quality */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Safety & Quality First
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#1690C7]">
                  Child Safety Standards
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-[#1690C7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Certified Products</h4>
                      <p className="text-gray-600">
                        All products meet international safety standards
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#1690C7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Non-Toxic Materials</h4>
                      <p className="text-gray-600">
                        Safe materials for children's health and wellbeing
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#1690C7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Age Appropriate</h4>
                      <p className="text-gray-600">
                        Products designed for specific age groups
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <img
                  src="https://thumbs.dreamstime.com/b/five-happy-kids-13566435.jpg"
                  alt="Happy Kids"
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
