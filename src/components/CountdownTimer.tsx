import { useState, useEffect } from "react"

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
      <div className="text-center">
        <p className="text-sm font-bold mb-4 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          ⏰ OFFER EXPIRES IN:
        </p>
        <div className="flex justify-center gap-3 text-2xl font-bold">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px] border border-white/30">
            {timeLeft.hours.toString().padStart(2, '0')}
            <div className="text-xs font-normal mt-1">HRS</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px] border border-white/30">
            {timeLeft.minutes.toString().padStart(2, '0')}
            <div className="text-xs font-normal mt-1">MIN</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px] border border-white/30">
            {timeLeft.seconds.toString().padStart(2, '0')}
            <div className="text-xs font-normal mt-1">SEC</div>
          </div>
        </div>
      </div>
    </div>
  )
}
