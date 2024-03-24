import { PropsWithChildren } from "react"

interface SectionHeaderProps {
  title: string
}

export function SectionHeader(props: PropsWithChildren<SectionHeaderProps>) {
  const { title, children } = props

  return (
    <div className="flex flex-wrap mx-[-16px]">
      <div className="w-full px-4">
        <div
          className="mx-auto max-w-[570px] text-center mb-[100px] wow fadeInUp"
          data-wow-delay=".1s"
        >
          <h2 className="text-black dark:text-white font-bold text-3xl sm:text-4xl md:text-[45px] mb-4">
            {title}
          </h2>
          <p className="text-body-color text-base md:text-lg leading-relaxed md:leading-relaxed">
            {children}.
          </p>
        </div>
      </div>
    </div>
  )
}
