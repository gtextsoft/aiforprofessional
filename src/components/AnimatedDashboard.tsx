import { useEffect, useState } from "react"
import { BarChart3, TrendingUp, Users, Zap } from "lucide-react"

export const AnimatedDashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0)
  
  const metrics = [
    { icon: BarChart3, label: "Market Analysis", value: "Processing...", color: "text-blue-400" },
    { icon: TrendingUp, label: "Growth Insights", value: "87% Complete", color: "text-green-400" }, 
    { icon: Users, label: "Client Segments", value: "5 Identified", color: "text-purple-400" },
    { icon: Zap, label: "Quick Wins", value: "12 Opportunities", color: "text-yellow-400" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-80 bg-brand-navy rounded-xl p-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-brand-blue"></div>
          ))}
        </div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 text-white mb-6">
        <h3 className="text-lg font-semibold">AI Consultant Dashboard</h3>
        <p className="text-brand-blue-light text-sm">Real-time analysis & insights</p>
      </div>
      
      {/* Animated metrics */}
      <div className="relative z-10 grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          const isActive = index === activeMetric
          
          return (
            <div 
              key={index}
              className={`bg-white/5 rounded-lg p-4 border transition-all duration-500 ${
                isActive 
                  ? 'border-brand-blue shadow-glow scale-105' 
                  : 'border-white/10'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className={`w-5 h-5 ${isActive ? metric.color : 'text-white/60'}`} />
                <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-white/60'}`}>
                  {metric.label}
                </span>
              </div>
              <div className={`text-lg font-bold transition-colors duration-300 ${
                isActive ? metric.color : 'text-white/40'
              }`}>
                {isActive ? metric.value : "---"}
              </div>
              
              {/* Progress bar */}
              {isActive && (
                <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-brand-blue to-brand-blue-light transition-all duration-2000 ease-out`}
                    style={{ width: '85%' }}
                  ></div>
                </div>
              )}
            </div>
          )
        })}
      </div>
      
      {/* Floating data points */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-brand-blue rounded-full animate-pulse`}
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 2) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '2s'
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}