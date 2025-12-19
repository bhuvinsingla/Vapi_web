import { FaMicrophone, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <FaMicrophone className="text-2xl text-blue-400" />
              <span className="text-xl font-bold">Voice Assistant Portfolio</span>
            </div>
            <p className="text-gray-400">
              Showcasing expertise in voice technology and conversational AI across multiple industries.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Domains</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Healthcare</li>
              <li>Hotel Booking</li>
              <li>Restaurants</li>
              <li>Property</li>
              <li>Business Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaGithub className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Voice Assistant Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

