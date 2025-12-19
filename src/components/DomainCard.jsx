import { useState } from 'react'

const DomainCard = ({ domain }) => {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = domain.icon

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-2 bg-gradient-to-r ${domain.color} transition-all duration-300 ${isHovered ? 'h-3' : ''}`}></div>
      
      <div className="p-8">
        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${domain.color} text-white mb-6 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
          <Icon className="text-3xl" />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{domain.title}</h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {domain.description}
        </p>
        
        <ul className="space-y-2">
          {domain.features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <span className="text-blue-600 mr-2">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DomainCard

