import { ComponentPropsWithRef, PropsWithChildren } from "react"

import { Link } from "react-router-dom"

interface UserMenuItemProps extends ComponentPropsWithRef<"a"> {
  linkTo: string
}

export function UserMenuItem({ linkTo, children, ...rest }: PropsWithChildren<UserMenuItemProps>) {
  return (
    <Link
      to={linkTo}
      {...rest}
      className="text-base text-dark dark:text-white group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
    >
      {" "}
      {children}
    </Link>
  )
}
