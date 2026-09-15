function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-6 mt-16 flex flex-col sm:flex-row items-center justify-between text-gray-600">
      <p className="text-sm mb-4 sm:mb-0">© 2026 My Website</p>

      <div className="flex space-x-6">
        <a href="#" className="hover:text-blue-600 transition-colors">
          GitHub
        </a>
        <a href="#" className="hover:text-pink-600 transition-colors">
          Instagram
        </a>
        <a href="#" className="hover:text-blue-700 transition-colors">
          Facebook
        </a>
      </div>
    </footer>
  );
}

export default Footer;
