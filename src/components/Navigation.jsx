import { useState } from 'react'
import { FaMicrophone, FaBars, FaTimes } from 'react-icons/fa'

const Navigation = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FaMicrophone className={`text-2xl transition-colors duration-300 ${
            isScrolled ? 'text-blue-600' : 'text-white'
          }`} />
          <span className={`text-xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}>
            Voice Assistant Portfolio
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('hero')}
            className={`transition-all duration-300 hover:scale-110 hover:font-bold transform origin-center ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('domains')}
            className={`transition-all duration-300 hover:scale-110 hover:font-bold transform origin-center ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`transition-all duration-300 hover:scale-110 hover:font-bold transform origin-center ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('test-voice')}
            className={`transition-all duration-300 hover:scale-110 hover:font-bold transform origin-center ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Test Voice
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 mx-4 rounded-lg overflow-hidden">
          <button
            onClick={() => scrollToSection('hero')}
            className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('domains')}
            className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('test-voice')}
            className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            Test Voice
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navigation

