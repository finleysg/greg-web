import { InputHTMLAttributes } from "react"

import { FieldError, FieldValues, Path, UseFormRegisterReturn } from "react-hook-form"

type InputControlProps<TData extends FieldValues> = {
  name: string
  label?: string
  error?: FieldError
  register: UseFormRegisterReturn<Path<TData>>
} & InputHTMLAttributes<HTMLInputElement>

export function InputControl<TData extends FieldValues>(props: InputControlProps<TData>) {
  const { name, label, error, register, ...rest } = props

  return (
    <div className="mb-8">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-dark dark:text-white mb-3">
          {label}
        </label>
      )}
      <input
        id={name}
        className="w-full border border-transparent dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary"
        aria-invalid={Boolean(error)}
        {...register}
        {...rest}
      />
      {error && (
        <div>
          <span
            className="text-rose-800 dark:text-rose-300 text-sm"
            aria-errormessage={error.message}
          >
            {error.message}
          </span>
        </div>
      )}
    </div>
  )
}
