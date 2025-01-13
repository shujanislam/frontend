'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-pink-500 to-yellow-500 text-gray-50 text-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Top Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <a href="#" className="hover:underline">
            Meta
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            API
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Locations
          </a>
          <a href="#" className="hover:underline">
            Instagram Lite
          </a>
          <a href="#" className="hover:underline">
            Threads
          </a>
          <a href="#" className="hover:underline">
            Contact Uploading & Non-Users
          </a>
          <a href="#" className="hover:underline">
            Meta Verified
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <select
              name="language"
              className="bg-transparent border-none outline-none cursor-pointer text-white"
            >
              <option value="en" defaultValue>
                English
              </option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
          <div className="mt-2 md:mt-0 text-center">
            &copy; 2025 Instagram from Meta
          </div>
        </div>
      </div>
    </footer>
  );
}

