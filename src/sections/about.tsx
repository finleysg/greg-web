import logoFull from "../assets/NSC_color_full2.svg"
import { Service } from "../components/service"

export function About() {
  return (
    <section id="about" className="pt-[120px]">
      <div className="container">
        <div className="pb-[100px] border-b border-white border-opacity-[.15]">
          <div className="flex flex-wrap items-center mx-[-16px]">
            <div className="w-full lg:w-1/2 px-4">
              <div className="mb-12 lg:mb-0 max-w-[570px] wow fadeInUp" data-wow-delay=".15s">
                <div className="w-full px-4">
                  <div className="text-center lg:text-right wow fadeInUp" data-wow-delay=".2s">
                    <img src={logoFull} alt="about-image" className="max-w-full mx-auto lg:mr-0" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="mb-12 lg:mb-0 max-w-[570px] wow fadeInUp" data-wow-delay=".15s">
                <h2 className="text-black dark:text-white font-bold text-3xl sm:text-4xl md:text-[45px] lg:text-4xl xl:text-[45px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight mb-6">
                  We Work With You to Make Your Vision Come to Life
                </h2>
                <p className="font-medium text-body-color text-base sm:text-lg leading-relaxed sm:leading-relaxed mb-11">
                  Kitchens, baths, basements, cabinet resurfacing, sheet rock, texture, knockdown,
                  flooring and more. We can work with you to make you remodel come to life. we can
                  also provide renderings to help you see your vision come to life. We are fully
                  licensed and insured and work with only licensed and insured sub contractors.
                </p>
                <p className="font-medium text-body-color text-base sm:text-lg leading-relaxed sm:leading-relaxed mb-11">
                  Many individuals enjoy tackling their own renovations but find that they do not
                  have the confidence to attack certain elements or have a hard time getting
                  started. Sometimes it is nice to have a contractor to help you lay out and plan
                  your renovation, ask questions along the way, teach some tricks of the trades.
                  Whether you are unsure of what materials to use or unsure how to create that
                  professional finish, whatever you need, we are here to help.
                </p>
                <div className="flex flex-wrap mx-[-12px]">
                  <Service serviceName="Remodeling" />
                  <Service serviceName="Additions and Garages" />
                  <Service serviceName="Decks and Outdoor Spaces" />
                  <Service serviceName="Renovation Consulting" />
                  <Service serviceName="Home Inspections" />
                  <Service serviceName="Excavation and Water Mitigation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
