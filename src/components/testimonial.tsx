import { PropsWithChildren } from "react"

interface TestimonialProps {
  customerName: string
  projectName: string
}

export function Testimonial(props: PropsWithChildren<TestimonialProps>) {
  const { customerName, projectName, children } = props

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div
        className="shadow-one bg-white dark:bg-[#1D2144] rounded-md p-8 lg:px-5 xl:px-8 mb-10 wow fadeInUp"
        data-wow-delay=".1s"
      >
        <p className="text-base text-body-color dark:text-white leading-relaxed pb-8 border-b border-body-color dark:border-white border-opacity-10 dark:border-opacity-10 mb-8">
          {children}
        </p>
        <div className="flex items-center">
          <div className="w-full">
            <h5 className="text-lg lg:text-base xl:text-lg text-dark dark:text-white font-semibold mb-1">
              {customerName}
            </h5>
            <p className="text-sm text-body-color">{projectName}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
