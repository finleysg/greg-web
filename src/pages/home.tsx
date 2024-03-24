import { BackToTop } from "../components/back-to-top"
import { About } from "../sections/about"
import { Contact } from "../sections/contact"
import { Gallery } from "../sections/gallery"
import { Hero } from "../sections/hero"
import { Testimonials } from "../sections/testimonials"

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <BackToTop />
    </>
  )
}
