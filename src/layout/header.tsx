import { useRef } from "react"

import { useEventListener } from "usehooks-ts"

import { ThemeToggle } from "../components/theme-toggle"
import { Menu } from "./menu"

export function Header() {
  const headerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const sticky = headerRef.current
    if (sticky) {
      if (window.scrollY > sticky.offsetTop) {
        sticky.classList.add("sticky")
      } else {
        sticky.classList.remove("sticky")
      }
    }
  }

  useEventListener("scroll", handleScroll)

  return (
    <header
      ref={headerRef}
      className="header bg-transparent absolute top-0 left-0 z-40 w-full flex items-center"
    >
      <div className="container">
        <div className="flex mx-[-16px] items-center justify-between relative">
          <div className="px-5 w-24 max-w-full">
            <a href="/" className="w-full block py-8 header-logo">
              <img
                src="/src/assets/NSC_black_abbrev2.svg"
                alt="logo"
                className="w-full h-8 dark:hidden"
              />
              <img
                src="/src/assets/NSC_white_abbrev2.svg"
                alt="logo"
                className="w-full h-8 hidden dark:block"
              />
            </a>
          </div>
          <div className="flex px-4 justify-between items-center w-full">
            <Menu />
            <div className="flex justify-end items-center pr-16 lg:pr-0">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
