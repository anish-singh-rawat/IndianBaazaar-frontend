import React from 'react'

const HomeSlider = ({slides}) => {
  return (
    <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                  ? "-translate-x-full"
                  : "translate-x-full"
            }`}
          >
            <div
              className={`h-full bg-gradient-to-r ${slide.backgroundColor} relative overflow-hidden`}
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
                      <Link to={slide.ctaLink}>
                        <Button
                          size="lg"
                          className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
                        >
                          {slide.ctaText}
                        </Button>
                      </Link>
                      <Link to="/learn-more">
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-white text-gray-900 font-semibold px-8 py-3 text-lg"
                        >
                          Learn More
                        </Button>
                      </Link>
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
  )
}

export default HomeSlider
