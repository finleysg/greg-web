import { ComponentPropsWithoutRef } from "react"

import { FieldError, FieldValues, Path, UseFormRegisterReturn } from "react-hook-form"

export interface SelectOption {
  name: string
  value: string | number
}

interface SelectControlProps<TData extends FieldValues> extends ComponentPropsWithoutRef<"select"> {
  name: string
  label?: string
  options: SelectOption[]
  error?: FieldError
  register: UseFormRegisterReturn<Path<TData>>
}

export function SelectControl<TData extends FieldValues>(props: SelectControlProps<TData>) {
  const { name, label, error, register, options, ...rest } = props

  return (
    <div className="mb-8">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-dark dark:text-white mb-3">
          {label}
        </label>
      )}
      <select
        {...register}
        {...rest}
        id={name}
        className="w-full border border-transparent dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary"
        aria-invalid={Boolean(error)}
      >
        <option key={0} value={""}>
          -- Select --
        </option>
        {options.map((opt) => {
          return (
            <option key={opt.value} value={opt.value}>
              {opt.name}
            </option>
          )
        })}
      </select>
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
