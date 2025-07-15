import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HomeSlider from "./HomeSlider";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/564x/c5/4c/8c/c54c8c9833a4e95cfe7a59e4ba70a5d6.jpg",
    title: "Welcome to IndianBaazaar",
    subtitle: "Your one-stop destination for everything you need",
    ctaText: "Shop Now",
    ctaLink: "/",
    backgroundColor: "from-[rgb(22,144,199)] to-[rgb(0,0,0)]",
  },
  {
    id: 2,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/052/923/889/small_2x/happy-diwali-2025-greeting-card-with-stylish-oil-lamp-and-festive-elements-for-diwali-sale-and-special-offers-free-video.jpg",
    title: "Electronics & Gadgets",
    subtitle: "Latest smartphones, laptops & accessories at best prices",
    ctaText: "Explore Electronics",
    ctaLink: "/electronics",
    backgroundColor: "from-[rgb(22,144,199)] to-[rgb(0,0,0)]",
  },
  {
    id: 3,
    image:
      "https://static.vecteezy.com/system/resources/previews/050/551/284/non_2x/happy-new-year-sale-2025-design-with-3d-glowing-light-bulb-billboard-typography-lettering-on-brick-wall-background-holiday-special-offer-campaign-discount-illustration-for-coupon-voucher-banner-vector.jpg",
    title: "Fashion & Beauty",
    subtitle: "Trendy clothes and premium beauty products for everyone",
    ctaText: "Shop Fashion",
    ctaLink: "/fashion",
    backgroundColor: "from-[rgb(22,144,199)] to-[rgb(0,0,0)]",
  },
  {
    id: 4,
    image:
      "https://t3.ftcdn.net/jpg/04/07/20/56/360_F_407205662_bssMmaxOjmIWYoKosf2flLRmsVl1ZOM1.jpg",
    title: "Books & Groceries",
    subtitle: "Fresh groceries delivered daily & bestselling books",
    ctaText: "Order Now",
    ctaLink: "/order-now",
    backgroundColor: "from-[rgb(22,144,199)] to-[rgb(0,0,0)]",
  },
  {
    id: 5,
    image:
      "https://www.shutterstock.com/image-illustration/holi-festival-retail-shopping-banner-260nw-2128498583.jpg",
    title: "Special Offers",
    subtitle: "Up to 70% off on selected items - Limited time deals",
    ctaText: "Grab Deals",
    ctaLink: "/",
    backgroundColor: "from-[rgb(22,144,199)] to-[rgb(0,0,0)]",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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
      // className="relative h-96 md:h-[500px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      {/* <HomeSlider slides={slides}/> */}

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
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
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
