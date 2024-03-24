import { AnchorLink } from "../components/anchor-link"
import { UserMenuItem } from "../components/user-menu-item"
import { useAuth } from "../hooks/use-auth"

export function Menu() {
  const { user } = useAuth()

  const navbarToggler = document.querySelector("#navbarToggler")
  const navbarCollapse = document.querySelector("#navbarCollapse")

  const handleNavbarToggle = () => {
    navbarToggler?.classList.toggle("navbarTogglerActive")
    navbarCollapse?.classList.toggle("hidden")
  }

  return (
    <div>
      <button
        id="navbarToggler"
        onClick={handleNavbarToggle}
        aria-label="Mobile Menu"
        className="block absolute right-4 top-1/2 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
      >
        <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"></span>
        <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"></span>
        <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"></span>
      </button>
      <nav
        id="navbarCollapse"
        className="absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white dark:bg-dark lg:dark:bg-transparent lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full hidden lg:block lg:static lg:shadow-none"
      >
        <ul className="block lg:flex">
          <li className="relative group">
            <AnchorLink anchorName="home" onClick={handleNavbarToggle}>
              Home
            </AnchorLink>
          </li>
          <li className="relative group">
            <AnchorLink anchorName="about" onClick={handleNavbarToggle}>
              About
            </AnchorLink>
          </li>
          <li className="relative group">
            <AnchorLink anchorName="gallery" onClick={handleNavbarToggle}>
              Gallery
            </AnchorLink>
          </li>
          <li className="relative group">
            <AnchorLink anchorName="testimonials" onClick={handleNavbarToggle}>
              Testimonials
            </AnchorLink>
          </li>
          <li className="relative group">
            <AnchorLink anchorName="contact" onClick={handleNavbarToggle}>
              Contact Us
            </AnchorLink>
          </li>
          {!user.isAuthenticated && (
            <li className="relative group">
              <UserMenuItem linkTo="/signin" onClick={handleNavbarToggle}>
                Sign In
              </UserMenuItem>
            </li>
          )}
          {user.isAuthenticated && (
            <li className="relative group">
              <UserMenuItem linkTo="/upload" onClick={handleNavbarToggle}>
                Upload Photos
              </UserMenuItem>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}
