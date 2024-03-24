import { useState } from "react"

import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import { zodResolver } from "@hookform/resolvers/zod"

import { ErrorDisplay } from "../components/error-display"
import { OverlaySpinner } from "../components/spinners/overlay-spinner"
import { httpClient } from "../utils/api-client"
import { apiUrl } from "../utils/api-utils"
import { ContactForm, ContactMessageData, ContactMessageSchema } from "./contact-form"

export function ContactHandler() {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const form = useForm<ContactMessageData>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(ContactMessageSchema),
  })

  const sendMessage = async (args: ContactMessageData) => {
    try {
      setBusy(true)
      await httpClient(apiUrl("contact"), { body: JSON.stringify(args) })
      toast.success("📫 Your message has been sent.")
    } catch (e) {
      const err = e as Error
      setError(err)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div>
      <OverlaySpinner loading={busy} />
      <ContactForm form={form} onSubmit={sendMessage} />
      {error && <ErrorDisplay error={error.message} delay={5000} onClose={() => 0} />}
    </div>
  )
}
