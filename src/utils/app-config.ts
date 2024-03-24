import { getYear } from 'date-fns';

export const serverBaseUrl = import.meta.env.VITE_SERVER_URL
export const apiBaseUrl = import.meta.env.VITE_API_URL
export const authBaseUrl = import.meta.env.VITE_AUTH_URL
export const adminBaseUrl = import.meta.env.VITE_ADMIN_URL
export const currentEnvironment = import.meta.env.VITE_CURRENT_ENVIRONMENT

export const maintenanceMode = import.meta.env.VITE_MODE !== "Live"
export const currentYear = getYear(Date.now())
export const twoMinutes = 1000 * 60 * 2
export const fiveMinutes = 1000 * 60 * 5
export const tenMinutes = 1000 * 60 * 10
