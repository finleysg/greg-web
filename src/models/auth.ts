import { z } from 'zod';

export const UserApiSchema = z.object({
  id: z.number().optional(),
  username: z.string().optional(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  is_authenticated: z.boolean().optional(),
  is_staff: z.boolean().optional(),
  is_active: z.boolean().optional(),
})

export type UserData = z.infer<typeof UserApiSchema>

export class User {
  id?: number
  username?: string
  firstName?: string
  lastName?: string
  name: string
  email?: string
  isAuthenticated: boolean
  isStaff: boolean
  isActive: boolean
  token?: string
  data?: UserData | null

  constructor(json: UserData | null) {
    this.id = json?.id
    this.username = json?.username
    this.firstName = json?.first_name
    this.lastName = json?.last_name
    this.name = json ? `${json.first_name} ${json.last_name}` : "Guest"
    this.email = json?.email
    this.isAuthenticated = json?.is_authenticated ?? false
    this.isActive = json?.is_active ?? false
    this.isStaff = json?.is_staff ?? false
    this.data = json
  }
}

export const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "An email is required to log in.")
    .email("Invalid email address."),
  password: z.string().trim().min(1, "A password is required to log in."),
})

export const RequestPasswordSchema = z.object({
  email: z.string().email(),
})

export const ResetPasswordSchema = z
  .object({
    uid: z.string().optional(),
    token: z.string().optional(),
    password: z.string().trim().min(8, "Your password must be at least 8 characters long."),
    re_password: z.string().trim().min(8, "Your password must be at least 8 characters long."),
  })
  .superRefine(({ password, re_password }, ctx) => {
    if (password !== re_password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords do not match.",
        path: ["re_password"],
      })
    }
  })

export const ChangePasswordSchema = z
  .object({
    current_password: z.string().trim().min(1, "You must provide your current password."),
    new_password: z.string().trim().min(8, "Your password must be at least 8 characters long."),
    re_new_password: z.string().trim().min(8, "Your password must be at least 8 characters long."),
  })
  .superRefine(({ new_password, re_new_password }, ctx) => {
    if (new_password !== re_new_password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords do not match.",
        path: ["re_new_password"],
      })
    }
  })

export type LoginData = z.infer<typeof LoginSchema>
export type RequestPasswordData = z.infer<typeof RequestPasswordSchema>
export type ResetPasswordData = z.infer<typeof ResetPasswordSchema>
export type ChangePasswordData = z.infer<typeof ChangePasswordSchema>
