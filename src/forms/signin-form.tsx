import { UseFormReturn } from "react-hook-form"

import { LoginData } from "../models/auth"

interface SigninFormProps {
  form: UseFormReturn<LoginData>
  onSubmit: (args: LoginData) => void
}

export function SigninForm({ form, onSubmit }: SigninFormProps) {
  const { register, handleSubmit, formState } = form
  const { errors: formErrors, isSubmitting } = formState

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8">
        <label htmlFor="email" className="block text-sm font-medium text-dark dark:text-white mb-3">
          {" "}
          Your Email{" "}
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="Enter your Email"
          className="w-full border border-transparent dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary"
        />
        {formErrors.email && (
          <div>
            <span className="text-red-500 text-sm">{formErrors.email.message}</span>
          </div>
        )}
      </div>
      <div className="mb-8">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-dark dark:text-white mb-3"
        >
          {" "}
          Your Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          placeholder="Enter your Password"
          className="w-full border border-transparent dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary"
        />
        {formErrors.password && (
          <div>
            <span className="text-red-500 text-sm">{formErrors.password.message}</span>
          </div>
        )}
      </div>
      <div className="mb-6">
        <button
          disabled={isSubmitting}
          className="w-full flex items-center justify-center text-base font-medium text-white bg-primary py-4 px-9 hover:shadow-signUp hover:bg-opacity-80 transition duration-300 ease-in-out rounded-md"
        >
          Sign in
        </button>
      </div>
    </form>
  )
}
