function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-gray-800">My Website</h1>

      <nav className="flex space-x-6">
        <a
          href="#"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          About
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
