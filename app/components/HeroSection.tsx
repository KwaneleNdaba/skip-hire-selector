export const HeroSection: React.FC = () => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 relative">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Find Your Perfect Skip
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Choose from our range of premium skip sizes designed for every project.
          <span className="font-semibold text-blue-600"> Fast delivery, fair pricing, fantastic service.</span>
        </p>
      </div>
    </div>
  </div>
);