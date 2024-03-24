import { ComponentPropsWithRef, PropsWithChildren, useEffect, useRef } from "react"

import { Link, useLocation } from "react-router-dom"

interface AnchorLinkProps extends ComponentPropsWithRef<"a"> {
  anchorName: string
}

export function AnchorLink({ anchorName, children, ...rest }: PropsWithChildren<AnchorLinkProps>) {
  const location = useLocation()
  const lastHashRef = useRef<string>("")

  useEffect(() => {
    if (location.hash) {
      lastHashRef.current = location.hash.slice(1)
    }

    if (lastHashRef.current && document.getElementById(lastHashRef.current)) {
      document.getElementById(lastHashRef.current)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [location])

  return (
    <Link
      to={`/#${anchorName}`}
      {...rest}
      className="menu-scroll text-base text-dark dark:text-white group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
    >
      {children}
    </Link>
  )
}
