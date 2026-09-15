function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jJz6ITgwgMJ3q4NTjgHxohFyfTZXtfAxdDIctPTl9g&s=10"
        alt="React logo"
        className="w-32 h-32 mb-6 object-contain"
      />

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to My Website
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        This is my first React project.
      </p>

      <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </section>
  );
}

export default Hero;
