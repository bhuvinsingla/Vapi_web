import { FaMicrophone, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 inline-block">
          <FaMicrophone className="text-8xl md:text-9xl animate-bounce" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Voice Assistant
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
            Experience
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Transforming industries through intelligent voice technology
          <br />
          Healthcare • Hotels • Restaurants • Property • Business Solutions
        </p>

        <div className="mt-12 animate-bounce">
          <FaArrowDown className="text-3xl mx-auto opacity-70" />
        </div>
      </div>
    </section>
  )
}

export default Hero

