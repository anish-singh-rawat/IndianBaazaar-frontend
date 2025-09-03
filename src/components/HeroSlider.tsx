import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axios";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta_text: string;
  ctaLink: string;
  backgroundColor: string;
}

export default function HeroSlider() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("get-event-slides");
      setSlides(response.data);
    } catch (err) {
      console.error("Error fetching sliders:", err);
      // Fallback to empty array if API fails
      setSlides([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides]);

  if (loading) {
    return <div className="h-96 flex items-center justify-center">Loading banners...</div>;
  }

  if (slides.length === 0) {
    return (
      <div className="h-96 flex items-center justify-center bg-gradient-to-r from-[rgb(22,144,199)] to-[rgb(0,0,0)]">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-2">No Banners Available</h2>
          <p>Check back later for exciting offers!</p>
        </div>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="relative h-96 md:h-[500px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
          >
            <div
              className={`h-full bg-gradient-to-r ${slide.backgroundColor || "from-[rgb(22,144,199)] to-[rgb(0,0,0)]"} relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0 bg-repeat opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              <div className="container mx-auto px-4 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
                  {/* Content */}
                  <div className="text-white space-y-6 z-10 relative">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {/* Primary Button */}
                      <Button
                        size="lg"
                        className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-8 py-3 text-lg shadow-md"
                        onClick={() => window.location.href = slide.ctaLink}
                      >
                        {slide?.cta_text}
                      </Button>

                      {/* Secondary Outline Button */}
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 text-lg shadow-md"
                      >
                        Learn More
                      </Button>
                    </div>


                    {/* Features */}
                    <div className="flex flex-wrap gap-6 pt-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-sm opacity-90">
                          Free Shipping
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-sm opacity-90">Best Prices</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-sm opacity-90">
                          Quality Products
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative lg:block hidden">
                    <div className="relative">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-auto max-h-96 object-contain drop-shadow-2xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/400x200?text=Image+Not+Found";
                        }}
                      />
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-1.5 md:p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-1.5 md:p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{
            width: isAutoPlaying
              ? `${((currentSlide + 1) / slides.length) * 100}%`
              : "0%",
          }}
        />
      </div>
    </div>
  );
}