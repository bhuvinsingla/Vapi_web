import { useState, useEffect, useRef } from 'react'
import { FaMicrophone, FaHospital, FaHotel, FaUtensils, FaBuilding, FaBriefcase, FaHeadset } from 'react-icons/fa'
import Vapi from '@vapi-ai/web'
import Hero from './components/Hero'
import DomainCard from './components/DomainCard'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const vapiRef = useRef(null)
  const [isCalling, setIsCalling] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ---------------------- INIT VAPI ---------------------- */
  useEffect(() => {
    const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY

    if (!publicKey) {
      console.warn('VAPI public key missing')
      return
    }

    if (!vapiRef.current) {
      const vapi = new Vapi(publicKey)

      vapi.on('call-start', () => {
        console.log('📞 Call started')
        setIsCalling(true)
      })

      vapi.on('call-end', () => {
        console.log('❌ Call ended')
        setIsCalling(false)
      })

      vapi.on('error', (err) => {
        console.error('Vapi error:', err)
        setIsCalling(false)
      })

      vapiRef.current = vapi
    }

    return () => {
      if (vapiRef.current) {
        try {
          vapiRef.current.stop()
        } catch (e) {}
        vapiRef.current = null
      }
    }
  }, [])

  const domains = [
    {
      id: 1,
      title: 'Healthcare',
      icon: FaHospital,
      description: 'Developed intelligent voice assistants for healthcare facilities, enabling patients to schedule appointments, access medical information, and receive health guidance through natural conversation.',
      features: [
        'Appointment scheduling',
        'Medical information access',
        'Health guidance and reminders',
        'Patient support automation'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Hotel Booking',
      icon: FaHotel,
      description: 'Created seamless voice-enabled booking systems for hotels, allowing guests to make reservations, check availability, and access hotel services through conversational AI.',
      features: [
        'Room reservation system',
        'Availability checking',
        'Service inquiries',
        'Guest support automation'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Restaurants',
      icon: FaUtensils,
      description: 'Built voice assistants for restaurants to handle table reservations, menu inquiries, order taking, and customer service, enhancing the dining experience.',
      features: [
        'Table reservations',
        'Menu information',
        'Order processing',
        'Customer service'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Property',
      icon: FaBuilding,
      description: 'Designed voice solutions for real estate and property management, enabling property inquiries, virtual tours, and automated customer support.',
      features: [
        'Property inquiries',
        'Virtual tour scheduling',
        'Rental information',
        'Customer support'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'Individual Firms',
      icon: FaBriefcase,
      description: 'Customized voice assistant solutions for various businesses, providing personalized AI interactions tailored to specific company needs and workflows.',
      features: [
        'Custom business solutions',
        'Workflow automation',
        'Client interaction management',
        'Tailored AI experiences'
      ],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 6,
      title: 'Customer Support',
      icon: FaHeadset,
      description: 'Developed comprehensive voice-enabled customer support systems that provide instant assistance, resolve queries, and enhance customer satisfaction through intelligent conversational AI.',
      features: [
        '24/7 customer assistance',
        'Query resolution',
        'Ticket management',
        'Multi-language support'
      ],
      color: 'from-teal-500 to-blue-500'
    }
  ]

  /* ---------------------- CALL CONTROLS ---------------------- */
  const startCall = async () => {
    const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID

    if (!assistantId) {
      alert('Assistant ID not configured')
      return
    }

    if (!vapiRef.current) {
      alert('Vapi not initialized. Please check your public key.')
      return
    }

    try {
      await vapiRef.current.start(assistantId)
    } catch (error) {
      console.error('Failed to start call:', error)
      alert(`Failed to start call: ${error.message || 'Unknown error'}`)
      setIsCalling(false)
    }
  }

  const endCall = async () => {
    if (!vapiRef.current) {
      return
    }

    try {
      await vapiRef.current.stop()
      setIsCalling(false)
    } catch (error) {
      console.error('Failed to end call:', error)
    }
  }
  

  return (
    <div className="min-h-screen">
      <Navigation isScrolled={isScrolled} />
      <div id="hero"><Hero /></div>
      
      <section id="domains" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Voice Assistant Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming industries through intelligent voice technology and conversational AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain) => (
              <DomainCard key={domain.id} domain={domain} />
            ))}
          </div>
        </div>
      </section>

      <section id="test-voice" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <FaMicrophone className="text-6xl text-blue-600 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Test Our Voice Agent
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the power of our voice assistant technology. Click the button below to start a conversation with our AI-powered voice agent.
          </p>
          <div className="flex flex-col items-center gap-4">
            {/* Toggle Button */}
            <button
              onClick={isCalling ? endCall : startCall}
              className={`relative w-20 h-20 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 flex items-center justify-center text-white ${
                isCalling
                  ? 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 animate-pulse'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }`}
              aria-label={isCalling ? 'End call' : 'Start call'}
            >
              <FaMicrophone className={`text-2xl ${isCalling ? '' : ''}`} />
              {isCalling && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
              )}
            </button>

            {/* Status Text */}
            <div className="text-center">
              <p className={`text-lg font-semibold ${isCalling ? 'text-green-600' : 'text-gray-600'}`}>
                {isCalling ? '🟢 Call Active' : '🔴 Ready to Call'}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {isCalling ? 'Click to end the conversation' : 'Click to start voice conversation'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <FaMicrophone className="text-6xl text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why Voice Assistants?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Voice assistants revolutionize how businesses interact with customers. They provide 
            24/7 availability, reduce operational costs, improve customer satisfaction, and enable 
            seamless, natural conversations that feel human-like. My experience spans across 
            multiple industries, creating tailored solutions that drive engagement and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Always Available</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">Natural</div>
              <div className="text-gray-600">Conversational AI</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">Efficient</div>
              <div className="text-gray-600">Cost Effective</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
