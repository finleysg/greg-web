import { UseFormReturn } from "react-hook-form"
import { z } from "zod"

import { InputControl } from "../components/input-control"
import { TextareaControl } from "../components/textarea-control"

export const ContactMessageSchema = z.object({
  full_name: z.string().trim().min(1, "Please enter your name."),
  email: z.string().trim().min(1, "A valid email address is required.").email(),
  message_text: z.string().trim().min(1, "Enter the text of your message."),
})
export type ContactMessageData = z.infer<typeof ContactMessageSchema>

interface ContactFormProps {
  form: UseFormReturn<ContactMessageData>
  onSubmit: (args: ContactMessageData) => void
}

export function ContactForm({ form, onSubmit }: ContactFormProps) {
  const { register, reset, handleSubmit, formState } = form
  const { errors: formErrors, isSubmitting } = formState

  const submit = (data: ContactMessageData) => {
    // formState.isValid is always false
    if (formErrors.full_name || formErrors.email || formErrors.message_text) {
      return
    }
    onSubmit(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="flex flex-wrap mx-[-16px]">
        <div className="w-full md:w-1/2 px-4">
          <InputControl
            name="full_name"
            type="text"
            label="Full Name"
            register={register("full_name")}
            error={formErrors.full_name}
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <InputControl
            name="email"
            type="email"
            label="Email"
            register={register("email")}
            error={formErrors.email}
          />
        </div>
        <div className="w-full px-4">
          <TextareaControl
            name="message_text"
            label="Message"
            register={register("message_text")}
            rows={5}
            error={formErrors.message_text}
          />
        </div>
        <div className="w-full px-4">
          <button
            type="submit"
            className="text-base font-medium text-white bg-primary py-4 px-9 hover:bg-opacity-80 hover:shadow-signUp rounded-md transition duration-300 ease-in-out"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
