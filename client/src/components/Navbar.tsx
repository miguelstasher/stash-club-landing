import logo from "@assets/logo.svg";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Stasher Logo" className="h-8 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#026FE3] transition-colors">How it works</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#026FE3] transition-colors">Locations</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#026FE3] transition-colors">Help</a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-[#026FE3]">Log in</a>
          <button className="text-sm font-bold text-[#026FE3] bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors">
            Find Storage
          </button>
        </div>
      </div>
    </nav>
  );
}
