import spinnerImg from "./assets/spinner.gif"
import { useEffect, useRef } from "react"
import './App.css'

export default function App() {
  const spinnerRef = useRef(null)
  const countdownRef = useRef(null)
  const yearRef = useRef(null)
  const daysRef = useRef(null)
  const hoursRef = useRef(null)
  const minutesRef = useRef(null)
  const secondsRef = useRef(null)

  {/* Adicionar valor ao contador */}
  const addValue = (value) => value < 10 ? "0" + value : value

  {/* Contagem regressiva de ano novo */}
  const Countdown = () => {
    const currentTime = new Date()
    const currentYear = currentTime.getFullYear()
    const newYearTime =  new Date(`January 01 ${currentYear + 1} 00:00:00`)
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60
    daysRef.current.textContent = addValue(days)
    hoursRef.current.textContent = addValue(hours)
    minutesRef.current.textContent = addValue(minutes)
    secondsRef.current.textContent = addValue(seconds)
  }
  useEffect(() => {
    setInterval(Countdown, 1000)
  }, [])

  {/* Exibir ano */}
  const yearDisplay = () => {
    const currentYear = new Date().getFullYear()
    yearRef.current.textContent = currentYear + 1
  }
  useEffect(() => {
    yearDisplay()
  }, [])

  {/* Exibir contador */}
  const countdownDisplay = () => {
    spinnerRef.current.remove()
    countdownRef.current.style.display = "flex"
  }
  useEffect(() => {
    setTimeout(countdownDisplay, 1000)
  }, [])

  return (
    <>
      <section className="container">
        <header className="title">
          <h1>New year countdown</h1>
        </header>{/* End title */}
        <main ref={countdownRef} className="countdown">
          <div className="time">
            <h2 ref={daysRef}></h2>
          </div>{/* End time */}
          <div className="time">
            <h2 ref={hoursRef}></h2>
          </div>{/* End time */}
          <div className="time">
            <h2 ref={minutesRef}></h2>
          </div>{/* End time */}
          <div className="time">
            <h2 ref={secondsRef}></h2>
          </div>{/* End time */}
        </main>{/* End countdown */}
        <figure ref={spinnerRef} className="spinner">
          <img src={spinnerImg} alt="Spinner gif" />
        </figure>{/* End spinner */}
      </section>{/* End container */}
      <div ref={yearRef} className="year"></div>{/* End year */}
    </>
  )
}