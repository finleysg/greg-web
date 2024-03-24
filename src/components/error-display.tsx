import { ComponentPropsWithoutRef, useState } from "react"

import { BiSolidMessageRoundedError } from "react-icons/bi"
import { MdClose } from "react-icons/md"
import { useTimeout } from "usehooks-ts"

interface ErrorDisplayProps extends ComponentPropsWithoutRef<"div"> {
  error: string
  delay?: number | null
  onClose?: () => void
}

export function ErrorDisplay({ error, delay, onClose, ...rest }: ErrorDisplayProps) {
  const [show, setShow] = useState(true)

  const hide = () => {
    setShow(false)
    onClose?.()
  }

  useTimeout(hide, delay ?? null)

  if (!show) return null

  return (
    <div
      className="relative p-4 mt-4 mb-4 border rounded bg-rose-300 border-rose-800"
      role="alert"
      {...rest}
    >
      <span className="text-rose-800">
        <BiSolidMessageRoundedError />
      </span>
      <span className="ms-2">{error}</span>
      <button
        type="button"
        className="absolute top-0 right-0 p-2 z-10 text-dark"
        onClick={hide}
        aria-label="Close"
      >
        <MdClose className="h-4 w-4" />
      </button>
    </div>
  )
}
