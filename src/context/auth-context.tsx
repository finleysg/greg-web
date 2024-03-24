import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';

import {
  ChangePasswordData,
  LoginData,
  RequestPasswordData,
  ResetPasswordData,
  User,
} from '../models/auth';
import { IAuthenticationProvider } from './authentication';

interface IAuthState {
  user: User
  login: UseMutationResult<void, Error, LoginData, unknown>
  logout: UseMutationResult<void, Error, void, unknown>
  requestPasswordReset: UseMutationResult<void, Error, RequestPasswordData, unknown>
  resetPassword: UseMutationResult<void, Error, ResetPasswordData, unknown>
  changePassword: UseMutationResult<void, Error, ChangePasswordData, unknown>
}

interface IAuthProvider {
  authenticationProvider: IAuthenticationProvider
}

export const AuthContext = createContext<IAuthState | null>(null)
AuthContext.displayName = "AuthContext"

export function AuthProvider({
  children,
  authenticationProvider,
}: PropsWithChildren<IAuthProvider>) {
  const [user, setUser] = useState(new User(null))
  const queryClient = useQueryClient()

  const loadUser = useCallback(async () => {
    try {
      const currentUser = await authenticationProvider.getUser()
      setUser(currentUser)
      return currentUser
    } catch (err) {
      setUser(new User(null))
    }
  }, [authenticationProvider, queryClient])

  useEffect(() => {
    loadUser()
  }, [loadUser])

  const login = useMutation({
    mutationFn: (args: LoginData) => authenticationProvider.login(args),
    onSuccess: () => {
      loadUser()
    },
  })

  const logout = useMutation({
    mutationFn: () => authenticationProvider.logout(),
    onSettled: () => {
      queryClient.clear()
      setUser(new User(null))
    },
  })

  const requestPasswordReset = useMutation({
    mutationFn: (args: RequestPasswordData) => authenticationProvider.requestPasswordReset(args),
    onSuccess: (_, args) => {
      const currentUser = new User(null)
      currentUser.email = args.email
      setUser(currentUser)
    }, // anonymous user, but set the email for UI display
  })

  const resetPassword = useMutation({
    mutationFn: (args: ResetPasswordData) => authenticationProvider.resetPassword(args),
  })

  const changePassword = useMutation({
    mutationFn: (args: ChangePasswordData) => authenticationProvider.changePassword(args),
  })

  const value = useMemo(() => {
    return {
      user,
      login,
      logout,
      requestPasswordReset,
      resetPassword,
      changePassword,
    }
  }, [login, logout, requestPasswordReset, resetPassword, changePassword, user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
