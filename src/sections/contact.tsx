import { ContactHandler } from "../forms/contact-handler"

export function Contact() {
  return (
    <section id="contact" className="pt-[120px] pb-20 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full lg:w-8/12 px-4">
            <div
              className="bg-primary bg-opacity-[3%] dark:bg-dark rounded-md p-11 mb-12 lg:mb-5 sm:p-[55px] lg:p-11 xl:p-[55px] wow fadeInUp"
              data-wow-delay=".15s
              "
            >
              <h2 className="font-bold text-black dark:text-white text-2xl sm:text-3xl lg:text-2xl xl:text-3xl mb-3">
                Tell us about your project
              </h2>
              <p className="text-body-color text-base font-medium mb-12">
                Our team will get back to you ASAP via email, or if you prefer, include your phone
                number and we'll give you a call.
              </p>
              <ContactHandler />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />{" "}
    </section>
  )
}
