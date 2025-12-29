import { FaMicrophone, FaGithub, FaLinkedin, FaPhone, FaWhatsapp, FaTelegram } from 'react-icons/fa'

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
              <li>Customer Support</li>
              <li>Business Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="tel:+917355635544" 
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPhone className="text-lg" />
                  <span>+91 7355635544</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/917355635544" 
                  className="flex items-center space-x-2 hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/Bhuvin_Singla" 
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram className="text-lg" />
                  <span>@Bhuvin_Singla</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/bhuvinsingla" 
                  className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/bhuvin-singla" 
                  className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-lg" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
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

