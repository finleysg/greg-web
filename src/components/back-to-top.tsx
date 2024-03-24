import { useRef } from "react"

import { useEventListener } from "usehooks-ts"

export function BackToTop() {
  const backToTopRef = useRef<HTMLButtonElement>(null)

  function scrollTo(element: Element, to = 0, duration = 500) {
    const start = element.scrollTop
    const change = to - start
    const increment = 20
    let currentTime = 0

    const animateScroll = () => {
      currentTime += increment

      const val = easeInOutQuad(currentTime, start, change, duration)

      element.scrollTop = val

      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }

    animateScroll()
  }

  const easeInOutQuad = function (t: number, b: number, c: number, d: number) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  useEventListener("scroll", () => {
    if (backToTopRef.current === null) return
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTopRef.current.style.display = "flex"
    } else {
      backToTopRef.current.style.display = "none"
    }
  })

  return (
    <button
      ref={backToTopRef}
      onClick={() => scrollTo(document.documentElement)}
      className="hidden items-center justify-center bg-primary text-white w-10 h-10 rounded-md fixed bottom-8 right-8 left-auto z-[999] hover:shadow-signUp hover:bg-opacity-80 transition duration-300 ease-in-out back-to-top shadow-md"
    >
      <span className="w-3 h-3 border-t border-l border-white rotate-45 mt-[6px]"></span>
    </button>
  )
}
